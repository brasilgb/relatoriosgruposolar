import React, { useState, createContext, useEffect } from 'react';
import api from '../services/api'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const [dataFiltro, setDataFiltro] = useState(new Date());

    const dtFormatada = (date) => {
        return moment(date).format('YYYY-MM-DD');
    }

    function calendarDate(dataf) {
        console.log(dataf);
        // setDataFiltro(dataf);
        // setLoadingCalendar(true);
    }

    // Armazena usuário no storage
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    //Funcao para logar o usario
    async function signIn(code, password) {
        setLoadingAuth(true);
        await api.post('login', { code: code, password: password })
            .then((usuario) => {
                if (usuario.data.sigIn.success) {
                    let udata = {
                        IdUsuario: usuario.data.sigIn.user.idusuario,
                        Name: usuario.data.sigIn.user.name,
                        Filial: usuario.data.sigIn.user.filial,
                        Type: usuario.data.sigIn.user.type,
                        Code: usuario.data.sigIn.user.code,
                        Rule: usuario.data.sigIn.user.rule
                    };
                    setUser(udata);
                    storageUser(udata);
                    setLoadingAuth(false);
                } else {
                    Alert.alert('Algo deu errado!', 'Redigite seu Email e/ou Senha!');
                    setLoadingAuth(false);
                }

            })
            .catch((error) => {
                alert(error);
                setLoadingAuth(false);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })
    }

    return (

        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn,
            signOut,
            setLoadingAuth,
            loadingAuth,
            loading,
            calendarDate,
            dtFormatada,
            setDataFiltro,
            dataFiltro
        }}>
            {children}
        </AuthContext.Provider>

    );
}