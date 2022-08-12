const { supportsHTMLInterface, clearSession } = require('../util');

const GetGameDescriptionByTitleIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'GetGameDescriptionByTitleIntent'
    );
  },
  handle(handlerInput) {
    clearSession(handlerInput);

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'GetGameDescriptionByTitleIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = GetGameDescriptionByTitleIntentHandler;
