const { supportsHTMLInterface } = require('../util');

const ClearCartIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'ClearCartIntent'
    );
  },
  handle(handlerInput) {
    const { responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'ClearCartIntent',
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = ClearCartIntentHandler;
