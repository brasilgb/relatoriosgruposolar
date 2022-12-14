import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Loading from '../../../../components/Loading';
import MoneyPTBR from '../../../../components/MoneyPTBR';
import { AuthContext } from '../../../../contexts/auth';
import api from '../../../../services/api';

export default function Segmento() {

    const { dtFormatada, dataFiltro } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [totais, setTotais] = useState([]);
    const [associacoes, setAssociacoes] = useState([]);

    // Extração de dados resumos totais
    useEffect(() => {
        async function getAssociacoes() {
            setLoading(true);
            await api.get(`associacoes/${dtFormatada(dataFiltro)}`)
                .then(associacoes => {
                    const assoc = associacoes.data.filter((dep) => (dep.Departamento === 2));
                    setAssociacoes(assoc);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getAssociacoes();
    }, [dataFiltro]);

    useEffect(() => {
        async function getTotais() {
            setLoading(true);
            await api.get(`totais/${dtFormatada(dataFiltro)}`)
                .then(totais => {
                    const tot = totais.data.filter((dep) => (dep.Departamento === 2));
                    setTotais(tot);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getTotais();

    }, [dataFiltro]);

    return (
        <View style={styles.container}>
            {loading
                ?
                <Loading />
                :
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: '#E5E5EA' }}>
                            <DataTable.Title style={styles.colpequena}>Assoc.</DataTable.Title>
                            <DataTable.Title style={styles.colgrande}>Faturamento</DataTable.Title>
                            <DataTable.Title style={styles.colpequena}>Rep.Fat</DataTable.Title>
                            <DataTable.Title style={styles.colpequena}>Margem</DataTable.Title>
                            <DataTable.Title style={styles.colpequena}>Tiket Médio</DataTable.Title>
                        </DataTable.Header>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            {totais.map((tot, index) => (
                                <DataTable.Row key={index} style={{ backgroundColor: '#E5E5EA' }}>
                                    <DataTable.Cell style={styles.colpequena}>Total</DataTable.Cell>
                                    <DataTable.Cell style={styles.colgrande}><MoneyPTBR number={parseFloat(tot.Faturamento)} /></DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}>{((1) * 100).toFixed(2)}%</DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}>{((tot.Margem) * 100).toFixed(2)}%</DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}><MoneyPTBR number={parseFloat(tot.TicketMedio)} /></DataTable.Cell>
                                </DataTable.Row>
                            ))}
                            {associacoes.map((fil, index) => (
                                <DataTable.Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#F3F4F6' : '#F9FAFB' }}>
                                    <DataTable.Cell style={styles.colpequena}>{fil.Associacao}</DataTable.Cell>
                                    <DataTable.Cell style={styles.colgrande}>{<MoneyPTBR number={parseFloat(fil.Faturamento)} />}</DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}>{((fil.RepFaturamento) * 100).toFixed(2)}%</DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}>{((fil.Margem) * 100).toFixed(2)}%</DataTable.Cell>
                                    <DataTable.Cell style={styles.colpequena}><MoneyPTBR number={parseFloat(fil.TicketMedio)} /></DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </ScrollView>
                    </DataTable>
                </ScrollView>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 0
    },
    colgrande: {
        width: 150,
        paddingHorizontal: 2
    },
    colmedia: {
        width: 120,
        paddingHorizontal: 2
    },
    colpequena: {
        width: 80,
        paddingHorizontal: 2
    }
});