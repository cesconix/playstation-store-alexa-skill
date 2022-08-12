const { supportsHTMLInterface, getSession } = require('../util');
const { convert } = require('html-to-text');

const GetGameDescriptionIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'GetGameDescriptionIntent'
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

    const speakOutput = convert(product.description);

    return responseBuilder.speak(speakOutput).getResponse();
  },
});

module.exports = GetGameDescriptionIntentHandler;
