const { supportsHTMLInterface } = require('../util');

function getRequestMessage(requestEnvelope) {
  return requestEnvelope.request.message || {};
}

const SpeakIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { intent } = getRequestMessage(handlerInput.requestEnvelope);
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        'Alexa.Presentation.HTML.Message' &&
      intent === 'SpeakIntent' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    const { message } = getRequestMessage(handlerInput.requestEnvelope);
    return handlerInput.responseBuilder.speak(message).getResponse();
  },
});

module.exports = SpeakIntentHandler;
