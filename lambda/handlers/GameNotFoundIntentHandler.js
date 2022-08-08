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

const GameNotFoundIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        'Alexa.Presentation.HTML.Message' &&
      getMessageIntent(handlerInput.requestEnvelope) === 'GameNotFoundIntent' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Gioco non trovato';

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  },
});

module.exports = GameNotFoundIntentHandler;
