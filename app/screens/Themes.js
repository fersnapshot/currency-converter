import * as React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';

import { changePrimaryColor } from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

type Props = {
  navigation: Object,
  changePrimaryColor: Function,
  colorSelected: string,
};

class Themes extends React.Component<Props> {
  handlePress = (color: string) => {
    this.props.changePrimaryColor(color);
    this.props.navigation.goBack();
  };

  render() {
    const { colorSelected } = this.props;

    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePress(styles.$blue)}
          selected
          checkmark={colorSelected === styles.$blue}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePress(styles.$orange)}
          selected
          checkmark={colorSelected === styles.$orange}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePress(styles.$green)}
          selected
          checkmark={colorSelected === styles.$green}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePress(styles.$purple)}
          selected
          checkmark={colorSelected === styles.$purple}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  colorSelected: state.themes.primaryColor,
});

export default connect(mapStateToProps, {
  changePrimaryColor,
})(Themes);
