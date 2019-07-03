import store from './store';
import { registerScreens, setRootScreen } from './screens';
import { AssetsService } from './services';

export default async () => {
  await AssetsService.loadIcons();

  registerScreens(store);
  setRootScreen();  
}
