import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer as NavigatorContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }}/>
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigatorContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
          {/* { <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            headerBackTitle: 'Back', 
            //title: 'All Categories'
            }}/> } */}
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{headerBackTitle: 'Back'}}/>
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigatorContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
