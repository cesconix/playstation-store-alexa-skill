const { supportsHTMLInterface } = require('../util');

const SearchGameIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'SearchGameIntent' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Ok, ecco qui la lista degli ultimi giochi.';

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: ' SearchGameIntent',
        playAnimation: true,
      },
    });

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  },
});

module.exports = SearchGameIntentHandler;
