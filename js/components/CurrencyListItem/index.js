import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { COIN_IMG_ROOT } from 'react-native-dotenv';

import { THEME } from '@app/enum';

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomColor: THEME.COLOR_BK_CONTRAST,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.COLOR_TEXT_HIGHLIGHT,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 12,
    color: THEME.COLOR_TEXT_LIGHT,
  },
  rightTitle: {
    fontSize: 16,
    color: THEME.COLOR_TEXT_GREEN,
  },
  avatarOverlay: {
    backgroundColor: THEME.COLOR_BK_PRIMARY,
  },
});

const avatarSize = 40;

class CurrencyListItem extends PureComponent {
  render () {
    const { data } = this.props;

    return (
      <ListItem
        containerStyle={styles.container}
        title={`${data['name']} - ${data['symbol']}`}
        titleStyle={styles.title}
        subtitle={`${data['total_supply']}`}
        subtitleStyle={styles.subtitleStyle}
        rightTitle={`$${data.quote.USD.price.toFixed(2)}`}
        rightTitleStyle={styles.rightTitle}
        leftAvatar={{
          source: { uri: `${COIN_IMG_ROOT}/${data.id}.png` },
          title: data.slug,
          size: avatarSize,
          overlayContainerStyle: styles.avatarOverlay,
        }}
      />
    );
  }
}

CurrencyListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurrencyListItem;
