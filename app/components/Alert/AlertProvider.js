import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { connect } from 'react-redux';

type Props = {
  children: React.Node,
  tipo: string,
  titulo: string,
  mensaje: string,
};

class AlertProvider extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.tipo && nextProps.titulo && nextProps.mensaje) {
      this.dropdown.alertWithType(nextProps.tipo, nextProps.titulo, nextProps.mensaje);
    }
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

function mapStateToProps(state) {
  const { tipo, titulo, mensaje } = state.alertas;

  return {
    tipo,
    titulo,
    mensaje,
  };
}

export default connect(mapStateToProps)(AlertProvider);
