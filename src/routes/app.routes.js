import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Página Inicial
import Home from '../pages/Home';

// Roteamento Lojas
import Lojas from '../pages/Lojas';
import LResumo from '../pages/Lojas/LResumo';
import LFaturamento from '../pages/Lojas/Faturamento';
import LServicos from '../pages/Lojas/Servicos';
import LCompras from '../pages/Lojas/Compras';

// Roteamento Naturovos
import Naturovos from '../pages/Naturovos';
import NResumo from '../pages/Naturovos/NResumo';
import NFaturamento from '../pages/Naturovos/NFaturamento';
import NCompras from '../pages/Naturovos/NCompras';
import NResumoFaturamento from '../pages/Naturovos/NResumoFaturamento';

// Roteamento Supermercados
import Super from '../pages/Supermercados';
import ResumoSuper from '../pages/Supermercados/ResumoSuper';
import SCompras from '../pages/Supermercados/Compras';
import SFaturamento from '../pages/Supermercados/Faturamento';
import { AuthContext } from '../contexts/auth';
import { Host } from 'react-native-portalize';

export default function AppRoutes() {
  const { user } = useContext(AuthContext);
  const AppStack = createStackNavigator();
  const LojasStack = createStackNavigator();
  const NaturStack = createStackNavigator();
  const SuperStack = createStackNavigator();

  function LojasScreen() {
    return (
      <LojasStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          presentation: 'transparentModal'
        }}
      >
        <LojasStack.Screen name="Lojas" component={Lojas} options={{ headerShown: false }} />
        <LojasStack.Screen name="LResumo" component={LResumo} options={{ headerShown: false }} />
        <LojasStack.Screen name="LFaturamento" component={LFaturamento} options={{ headerShown: false }} />
        <LojasStack.Screen name="LServicos" component={LServicos} options={{ headerShown: false }} />
        <LojasStack.Screen name="LCompras" component={LCompras} options={{ headerShown: false }} />
      </LojasStack.Navigator>
    )
  }

  function NaturScreen() {
    return (
      <NaturStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          presentation: 'transparentModal'
        }}
      >
        <NaturStack.Screen name="Naturovos" component={Naturovos} options={{ headerShown: false }} />
        <LojasStack.Screen name="NResumo" component={NResumo} options={{ headerShown: false }} />
        <LojasStack.Screen name="NFaturamento" component={NFaturamento} options={{ headerShown: false }} />
        <LojasStack.Screen name="NCompras" component={NCompras} options={{ headerShown: false }} />
        <LojasStack.Screen name="NResumoFaturamento" component={NResumoFaturamento} options={{ headerShown: false }} />

      </NaturStack.Navigator>
    )
  }

  function SuperScreen() {
    return (
      <SuperStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          presentation: 'transparentModal'
        }}
      >
        <SuperStack.Screen name="Super" component={Super} options={{ headerShown: false }} />
        <SuperStack.Screen name="ResumoSuper" component={ResumoSuper} options={{ headerShown: false }} />
        <SuperStack.Screen name="SCompras" component={SCompras} options={{ headerShown: false }} />
        <SuperStack.Screen name="SFaturamento" component={SFaturamento} options={{ headerShown: false }} />
      </SuperStack.Navigator>
    )
  }

  return (
    <Host>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          presentation: 'transparentModal'
        }}
      >

        {user.Rule == 0 &&
          <>
            <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <AppStack.Screen name="LojasScreen" component={LojasScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="NaturScreen" component={NaturScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="SuperScreen" component={SuperScreen} options={{ headerShown: false }} />
          </>
        }

        {user.Rule == 1 &&
          <AppStack.Screen name="LojasScreen" component={LojasScreen} options={{ headerShown: false }} />
        }

        {user.Rule == 2 &&
          <AppStack.Screen name="SuperScreen" component={SuperScreen} options={{ headerShown: false }} />
        }

        {user.Rule == 5 &&
          <AppStack.Screen name="NaturScreen" component={NaturScreen} options={{ headerShown: false }} />
        }

      </AppStack.Navigator>
    </Host>


  );
}