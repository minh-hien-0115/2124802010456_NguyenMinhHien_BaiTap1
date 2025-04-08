import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Bai1Screen, Bai2Screen, Bai3Screen, Bai4Screen, Bai5Screen, Bai6Screen } from '../component';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Bài 1">
      <Drawer.Screen name="Bài 1" component={Bai1Screen} />
      <Drawer.Screen name="Bài 2" component={Bai2Screen} />
      <Drawer.Screen name="Bài 3" component={Bai3Screen} />
      <Drawer.Screen name="Bài 4" component={Bai4Screen} />
      <Drawer.Screen name="Bài 5" component={Bai5Screen} />
      <Drawer.Screen name="Bài 6" component={Bai6Screen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;