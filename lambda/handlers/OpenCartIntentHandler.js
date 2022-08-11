const { supportsHTMLInterface } = require('../util');

const OpenCartIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'OpenCartIntent'
    );
  },
  handle(handlerInput) {
    const { responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'OpenCartIntent',
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = OpenCartIntentHandler;
