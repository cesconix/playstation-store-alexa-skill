const { supportsHTMLInterface } = require('../util');

const AddToCartByTitleIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'AddToCartByTitleIntent'
    );
  },
  handle(handlerInput) {
    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'AddToCartByTitleIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = AddToCartByTitleIntentHandler;
