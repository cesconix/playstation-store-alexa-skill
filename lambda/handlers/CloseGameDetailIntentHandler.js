const { supportsHTMLInterface, clearSession } = require('../util');

const CloseGameDetailIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'CloseGameDetailIntent'
    );
  },
  handle(handlerInput) {
    clearSession(handlerInput);

    const { responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'CloseGameDetailIntent',
      },
    });

    const speakOutput = 'pulisco la sessione';
    return responseBuilder.speak(speakOutput).getResponse();
  },
});

module.exports = CloseGameDetailIntentHandler;
