import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import DetailLabuanBajoScreen from '../screens/DetailLabuanBajoScreen';
import DetailVeneziaScreen from '../screens/DetailVeneziaScreen';
import DetailAmsterdamScreen from '../screens/DetailAmsterdamScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WishlistScreen from '../screens/WishlistScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Inisialisasi Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * APP NAVIGATOR
 * Menangani alur navigasi antar halaman:
 * 1. StartScreen → halaman pembuka
 * 2. HomeScreen → halaman utama
 * 3. DetailScreen → halaman detail destinasi
 */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false, // Semua header disembunyikan
      }}
    >
      {/* Start Screen (Landing Page) */}
      <Stack.Screen name="StartScreen" component={StartScreen} />

      {/* Home Screen (Halaman utama setelah tombol Start Exploring ditekan) */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      {/* Detail Screen Labuan Bajo) */}
      <Stack.Screen name="DetailLabuanBajoScreen" component={DetailLabuanBajoScreen} />

      {/* Detail Screen Venezia) */}
      <Stack.Screen name="DetailVeneziaScreen" component={DetailVeneziaScreen} />

      {/* Detail Screen Amsterdam) */}
      <Stack.Screen name="DetailAmsterdamScreen" component={DetailAmsterdamScreen} />

      {/* Detail Profil Screen) */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      {/* Detail Ticket Screen) */}
      <Stack.Screen name="TicketScreen" component={TicketScreen} />

      {/* Detail Whistlist Screen) */}
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} />

      {/* Detail Help Support Screen ) */}
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />

      {/* Detail Help Support Screen ) */}
      <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />

      {/* Detail Help Support Screen ) */}
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;