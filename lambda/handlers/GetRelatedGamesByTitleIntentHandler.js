const { supportsHTMLInterface } = require('../util');

const GetRelatedGamesByTitleIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'GetRelatedGamesByTitleIntent'
    );
  },
  handle(handlerInput) {
    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'GetRelatedGamesByTitleIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = GetRelatedGamesByTitleIntentHandler;
