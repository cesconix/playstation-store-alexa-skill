const { supportsHTMLInterface } = require('../util');

function getMessageIntent(requestEnvelope) {
  const requestMessage = requestEnvelope.request.message;
  if (requestMessage) {
    if (requestMessage.intent) {
      return requestMessage.intent;
    }
  }
  return null; // Otherwise no intent found in the message body
}

const SpeakIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        'Alexa.Presentation.HTML.Message' &&
      getMessageIntent(handlerInput.requestEnvelope) === 'SpeakIntentHandler' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    return (
      handlerInput.responseBuilder
        .speak(handlerInput.requestEnvelope.request.message.message)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  },
});

module.exports = SpeakIntentHandler;
