import { AppRegistry } from 'react-native'; 
import { Navigation } from 'react-native-navigation';
import startApp from './js/start';

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
