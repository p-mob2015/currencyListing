import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import CurrencyListing from './CurrencyListing';

export const registerScreens = store => {
  Navigation.registerComponentWithRedux('navigation.CurrencyListing', () => CurrencyListing, Provider, store);
}

export const setRootScreen = screen => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: screen || 'navigation.CurrencyListing',
          },
        }],
        options: {
          layout: {
            orientation: 'portrait',
          },
        },
      },
    },
  });
}
