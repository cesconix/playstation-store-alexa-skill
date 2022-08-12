const { supportsHTMLInterface, getSession } = require('../util');

const GetGamePriceIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'GetGamePriceIntent'
    );
  },
  handle(handlerInput) {
    const { responseBuilder } = handlerInput;

    const product = getSession(handlerInput);

    if (!product) {
      return responseBuilder
        .speak('Non ho capito. Prova prima ad aprire un gioco.')
        .getResponse();
    }

    const speakOutput = `${product.name} costa ${product.price.value} euro.`;

    return responseBuilder.speak(speakOutput).getResponse();
  },
});

module.exports = GetGamePriceIntentHandler;
