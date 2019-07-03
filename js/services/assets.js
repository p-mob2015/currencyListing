import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

let iconResources;

const loadIcons = async () => {
  try {
    const icons = await Promise.all([
      MaterialIcons.getImageSource('autorenew', 28),
    ]);
    const [renew] = icons;

    iconResources = {
      renew,
    };
  } catch (_error) {
    console.log('Error while loading icons sources', _error);
  }
}

export {
  iconResources,
  loadIcons,
};
