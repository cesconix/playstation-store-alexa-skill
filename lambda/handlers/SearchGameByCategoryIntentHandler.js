const { supportsHTMLInterface } = require('../util');

const SearchGameByCategoryIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'SearchGameByCategory' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Ok, ecco qui la lista degli ultimi giochi.';

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'SearchGameByCategory',
        gameCategory:
          handlerInput.requestEnvelope.request.intent.slots.gameCategory.value,
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

module.exports = SearchGameByCategoryIntentHandler;
