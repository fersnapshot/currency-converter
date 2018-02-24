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

type Props = {
  navigation: Object,
  swapCurrency: Function,
  changeCurrencyAmount: Function,
  baseCurrency: string,
  quoteCurrency: string,
  amount: number,
  conversionRate: number,
  isFetching: boolean,
  lastConvertedDate: Date,
  primaryColor: string,
};

class Home extends React.Component<Props> {
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
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
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      isFetching,
      lastConvertedDate,
      primaryColor,
    } = this.props;

    let quotePrice = (amount * conversionRate).toFixed(2);
    if (isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding" style={{ alignItems: 'center' }}>
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const conversionRate = rates[quoteCurrency] || 0;
  const isFetching = conversionSelector.isFetching;
  const lastConvertedDate = conversionSelector.date
    ? new Date(conversionSelector.date)
    : new Date();

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate,
    isFetching,
    lastConvertedDate,
    primaryColor: state.themes.primaryColor,
  };
}

export default connect(mapStateToProps, {
  swapCurrency,
  changeCurrencyAmount,
})(Home);
