import * as React from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

type Props = {
  navigation: Object,
  changeBaseCurrency: Function,
  changeQuoteCurrency: Function,
  baseCurrency: string,
  quoteCurrency: string,
  primaryColor: string,
};

class CurrencyList extends React.Component<Props> {
  handlePress = (item: string) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.changeBaseCurrency(item);
    } else if (type === 'quote') {
      this.props.changeQuoteCurrency(item);
    }
    this.props.navigation.goBack(null);
  };

  render() {
    const { type } = this.props.navigation.state.params;

    const itemSelected =
      type === 'base' ? this.props.baseCurrency : type === 'quote' ? this.props.quoteCurrency : '';

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          extraData={this.state}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === itemSelected}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.themes.primaryColor,
});

export default connect(mapStateToProps, {
  changeBaseCurrency,
  changeQuoteCurrency,
})(CurrencyList);
