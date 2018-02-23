import * as React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

type Props = {
  navigation: Object,
  swapCurrency: Function,
  changeCurrencyAmount: Function,
  baseCurrency: string,
  quoteCurrency: string,
  amount: number,
};

class Home extends React.Component<Props> {
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleTextChange = (amount: string) => {
    this.props.changeCurrencyAmount(amount);
  };

  handleSwapCurrency = () => {
    this.props.swapCurrency();
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    const { baseCurrency, quoteCurrency, amount } = this.props;

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding" style={{ alignItems: 'center' }}>
          <Logo />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    amount: state.currencies.amount,
  };
}
export default connect(mapStateToProps, {
  swapCurrency,
  changeCurrencyAmount,
})(Home);
