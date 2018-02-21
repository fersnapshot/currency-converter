import * as React from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import themes from '../data/themes';

type Color = {
  name: string,
  color: string,
};

type State = {
  colorSelected: Color,
};

class Themes extends React.Component<{}, State> {
  state = {
    colorSelected: themes[0],
  };

  handlePress = (color: Color) => {
    this.setState({ colorSelected: color });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={themes}
          extraData={this.state}
          keyExtractor={item => item.color}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              text={item.name}
              selected={item.color === this.state.colorSelected.color}
              onPress={() => this.handlePress(item)}
              color={item.color}
            />
          )}
        />
      </View>
    );
  }
}

export default Themes;
