// @flow
import * as React from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

type State = {
  itemSelected: string,
};

class CurrencyList extends React.Component<{}, State> {
  state = {
    itemSelected: 'CAD',
  };

  handlePress = (item: string) => {
    this.setState({ itemSelected: item });
  };

  render() {
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
              selected={item === this.state.itemSelected}
              onPress={() => this.handlePress(item)}
            />
          )}
        />
      </View>
    );
  }
}

export default CurrencyList;
