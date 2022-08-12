const { supportsHTMLInterface, clearSession } = require('../util');

const SearchGameByTitleIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'SearchGameByTitle' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    clearSession(handlerInput);

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'SearchGameByTitle',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = SearchGameByTitleIntentHandler;
