const { supportsHTMLInterface, getSession } = require('../util');

const AddToCartIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'AddToCartIntent'
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

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'AddToCartByTitleIntent',
        gameTitle: product.name,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = AddToCartIntentHandler;
