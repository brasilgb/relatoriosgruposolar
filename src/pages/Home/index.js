import React from 'react';
import { Image } from 'react-native';
import HeaderPortal from '../../components/Header/Portal';
import { useNavigation } from '@react-navigation/native';
import { LButtonMaster, BoxHome, ContainerPortal } from './style';

export default function Home() {

    const navigation = useNavigation();
    return (

        <BoxHome
            startColor="#00a8ea"
            endColor="#009DE0" // Meio
            alignItems="center"
            justifyContent="center"
        >
            <HeaderPortal
                startColor="#009DE0" // Meio
                endColor="#00a8ea"
                bgStatus="#00a8ea"
                textColor="#FFF"
                title="Grupo Solar"
                subTitle="Relatórios Administrativos"
                barStyle='light-content'
            />
            <ContainerPortal>
                <LButtonMaster
                    bgcolor="#004099"
                    onPress={() => navigation.navigate('LojasScreen')}
                >
                    <Image source={require('../../assets/solar.png')} />
                </LButtonMaster>

                <LButtonMaster
                    bgcolor="#F5AB00"
                    onPress={() => navigation.navigate('NaturScreen')}
                >
                    <Image source={require('../../assets/natur.png')} />
                </LButtonMaster>

                <LButtonMaster
                    bgcolor="#EB6909"
                    onPress={() => navigation.navigate('SuperScreen')}
                >
                    <Image source={require('../../assets/super.png')} />
                </LButtonMaster>
            </ContainerPortal>
        </BoxHome>

    );
}
