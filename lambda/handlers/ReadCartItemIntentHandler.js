const { supportsHTMLInterface } = require('../util');

const ReadCartItemIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'ReadCartItemIntent'
    );
  },
  handle(handlerInput) {
    const { responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'ReadCartItemIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = ReadCartItemIntentHandler;
