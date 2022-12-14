import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const TopBarHome = ({ children, startColor, endColor, alignItems, justifyContent }) => {
    return (
        <LinearGradient
            colors={[startColor, endColor]}
            style={{ 
                flex: 1, 
                alignItems: alignItems, 
                justifyContent: justifyContent,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                elevation: 4
            }}
            start={{ x: 0.1, y: 0.8 }}
            end={{ x: 0.1, y: 0.1 }}
        >
            {children}
        </LinearGradient>
    );
};

// export const TopBarHome = styled.View`
// flex: 1;
// `;

// export const BoxHeaderHome = styled.View`
// background-color: ${props => props.bgColor ? props.bgColor : "#FFF"};
// border-bottom-start-radius: 20px;
// border-bottom-end-radius: 20px;
// padding-bottom: ${ props => props.paddingBottom ? props.paddingBottom : 0 };
// `;
export const InfoLogged = styled.View`
flex: 1;
flex-direction: row;
justify-content: center;
padding-top: 10px;
`;

InfoLogged.Left = styled.View`
flex: 1;
padding-left: 16px;
`;

InfoLogged.Right = styled.View`
flex: 1;
padding-right: 16px;
align-items: flex-end;
`;

InfoLogged.Middle = styled.View`
flex:10;
align-items: flex-start;
`;

InfoLogged.Title = styled.Text`
color: ${props => props.color ? props.color : "#FFF"};
`;

export const InfoHeader = styled.View`
flex:2;
padding-bottom: 20px;
`;

InfoHeader.Title = styled.Text`
font-size: 20px;
font-family: 'Roboto-Bold';
color: ${props => props.color ? props.color : "#FFF"};
text-align: center;
text-transform: uppercase;
padding: 0px 0px 5px;
`;

InfoHeader.SubTitle = styled.Text`
font-size: 14px;
font-family: 'Roboto-Bold';
color: ${props => props.color ? props.color : "#FFF"};
text-align: center;
text-transform: uppercase;
padding: 0px 0px 2px; 
`;

export const BoxAtualiza = styled.View`
position: absolute;
flex-direction: row;
top: 85%;
width: 80%;
align-self: center;
align-items: center;
background-color: ${props => props.bgColor ? props.bgColor : "#FFF"};
padding: 5px 5px 5px;
margin: 0px auto;
elevation: 6;
border-radius: 5px;
border-width: 2px;
border-color: #FFF;
`;

export const BoxTextAtualiza = styled.View`
flex-grow: 2;
`;

export const TitleAtualiza = styled.Text`
font-size: 16px;
font-family: "Roboto-Medium";
color: ${props => props.color ? props.color : "#FFF"};
text-align: center;
padding: 2px 0px 2px;
text-shadow: 1px 1px 4px #ccc;
`;

