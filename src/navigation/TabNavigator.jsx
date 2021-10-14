import React from 'react';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Noticias, Pasantias, Trabajos } from '../screens';
import { colors } from '../utils/theme';

const Tab = createBottomTabNavigator();

const getIcon = (routeName, size, color) => {
  console.log(routeName)
  switch (routeName) {
    case 'Noticias':
      return <FontAwesome name="newspaper-o" size={size} color={color} />
    case 'Trabajos':
      return <MaterialIcons name="work" size={size} color={color} />
    case 'Pasantias':
      return <Ionicons name='school' size={size} color={color} />;
    default:
      return <MaterialIcons name="help" size={size} color={color} />
  }

};

const navigatorScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconSize = focused ? size * 1.2 : size;
    return getIcon(route.name, iconSize, color);
  },
  tabBarAllowFontScaling: false,
  tabBarActiveTintColor: colors.light,
  tabBarInactiveTintColor: colors.primary,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarInactiveBackgroundColor: colors.white,
  tabBarActiveBackgroundColor: colors.primary,
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="Noticias" component={Noticias} options={{ title: 'Noticias' }} />
      <Tab.Screen name="Trabajos" component={Trabajos} options={{ title: 'Bolsa de Trabajo' }} />
      <Tab.Screen name="Pasantias" component={Pasantias} options={{ title: 'Pasantías' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;