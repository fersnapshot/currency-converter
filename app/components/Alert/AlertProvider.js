import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

type Props = {
  children: React.Node,
};

class AlertProvider extends React.Component<Props> {
  static childContextTypes = {
    alertWithType: Function,
    alert: Function,
  };

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          defaultContainer={{
            paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
          }}
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;
