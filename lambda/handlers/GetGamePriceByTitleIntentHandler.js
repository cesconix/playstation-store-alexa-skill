const { supportsHTMLInterface, clearSession } = require('../util');

const GetGamePriceByTitleIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'GetGamePriceByTitleIntent'
    );
  },
  handle(handlerInput) {
    clearSession(handlerInput);

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'GetGamePriceByTitleIntent',
        gameTitle:
          handlerInput.requestEnvelope.request.intent.slots.gameTitle.value,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = GetGamePriceByTitleIntentHandler;
