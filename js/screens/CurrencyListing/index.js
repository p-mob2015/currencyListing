import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Spinner from 'react-native-spinkit';

import { THEME } from '@app/enum';
import { AssetsService } from '@app/services';
import CurrencyListItem from '@app/components/CurrencyListItem';
import { loadCurrencies } from '@app/store/actions/currencies';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerFooter: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  listContent: {
  },
});

class CurrencyListing extends Component {
  static options(passProps) {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Cryptocurrencies',
        },
        largeTitle: {
          visible: true,
        },
        rightButtons: [
          {
            id: 'refreshBtn',
            icon: AssetsService.iconResources.renew,
            color: THEME.COLOR_TEXT_HIGHLIGHT,
          },
        ],
      },
    };
  }

  constructor (props) {
    super(props);

    this.renderFooter = this.renderFooter.bind(this);

    Navigation.events().bindComponent(this);
  }

  componentDidMount () {
    const { currencies: { count, isLoaded }, loadCurrencies } = this.props;

    // if (!isLoaded) loadCurrencies(count);
    loadCurrencies(count);
  }

  navigationButtonPressed ({ buttonId }) {
    const { currencies: { count, isLoading }, loadCurrencies } = this.props;

    if (buttonId === 'refreshBtn' && !isLoading) {
      loadCurrencies(count);
    }
  }

  keyExtractor = item => String(item.id);

  renderItem ({ item }) {
    return (
      <CurrencyListItem data={item} />
    );
  }

  renderFooter () {
    const { currencies: { isLoaded, isLoading } } = this.props;

    if (!isLoaded || !isLoading) return null;

    return (
      <View style={styles.spinnerFooter}>
        <Spinner type="Bounce" />
      </View>
    );
  }

  render () {
    const { currencies: { isLoaded, isLoading, data, count, error }, loadCurrencies } = this.props;

    if (!isLoaded && isLoading) {
      return (
        <View style={styles.centerContainer}>
          <Spinner type="Bounce" />
        </View>
      );
    }

    if (error && !data) {
      return (
        <View style={styles.centerContainer}>
          <Text>Error occurred. Please retry.</Text>
        </View>
      );
    }

    if (!data) return null;

    return (
      <View>
        <FlatList
          scrollEnabled
          contentContainerStyle={styles.listContent}
          data={data}
          renderItem={this.renderItem}
          onEndReached={() => loadCurrencies(count + 10)}
          onEndReachedThreshold={0.1}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={this.renderFooter}
          removeClippedSubviews
        />
        {isLoading && <Spinner type="Bounce" />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies,
});
const mapDispatchToProps = dispatch => ({
  loadCurrencies: count => dispatch(loadCurrencies(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListing);
