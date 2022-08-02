import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../../contexts/auth';
import Calendar from '../../Calendar';
import { BoxAtualiza, BoxTextAtualiza, InfoHeader, InfoLogged, TitleAtualiza, TopBarHome } from './style';

export default function HeaderHome({ dtatu, startColor, endColor, bgStatus, title, subTitle, textColor, barStyle }) {

    const { signOut, user } = useContext(AuthContext);
    const navigation = useNavigation();

    return (

        <TopBarHome
            startColor={startColor}
            endColor={endColor}
            textColor={textColor}
            alignItems="center"
            justifyContent="center"
        >
            <StatusBar barStyle={barStyle} backgroundColor={bgStatus} />

            <InfoLogged>
                <InfoLogged.Left>

                    {user.Rule > 0 ?
                        <Icon name="ios-person-circle" size={20} color={textColor} />
                        :
                        <Icon name="ios-arrow-back-circle" size={20} color={textColor} onPress={() => navigation.goBack()} />
                    }

                </InfoLogged.Left>

                <InfoLogged.Middle>
                    <InfoLogged.Title color={textColor}>
                        {user.Name}
                    </InfoLogged.Title>
                </InfoLogged.Middle>

                <InfoLogged.Right>

                    {user.Rule > 0 &&
                        <Icon onPress={signOut} name="ios-exit-outline" size={20} color={textColor} />
                    }

                </InfoLogged.Right>
            </InfoLogged>

            <InfoHeader>
                <InfoHeader.Title color={textColor}>
                    {title}
                </InfoHeader.Title>
                <InfoHeader.SubTitle color={textColor}>
                    {subTitle}
                </InfoHeader.SubTitle>
            </InfoHeader>

            <BoxAtualiza bgcolor="#FFF">
                <BoxTextAtualiza>
                    <TitleAtualiza color="#555">
                        {dtatu}
                    </TitleAtualiza>
                </BoxTextAtualiza>
                <Calendar color={endColor} />
            </BoxAtualiza>

        </TopBarHome>
    );
}