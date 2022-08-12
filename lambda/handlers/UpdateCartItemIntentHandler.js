const { supportsHTMLInterface } = require('../util');

const UpdateCartItemIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'UpdateCartItemIntent'
    );
  },
  handle(handlerInput) {
    const { responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'UpdateCartItemIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = UpdateCartItemIntentHandler;
