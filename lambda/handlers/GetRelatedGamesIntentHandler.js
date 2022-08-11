const { supportsHTMLInterface } = require('../util');

const GetRelatedGamesIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'GetRelatedGamesIntent'
    );
  },
  handle(handlerInput) {
    const { attributesManager, responseBuilder } = handlerInput;

    if (!attributesManager.getSessionAttributes().inGameDetail) {
      return responseBuilder
        .speak('Non ho capito. Prova prima ad aprire un gioco.')
        .getResponse();
    }

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'GetRelatedGamesIntent',
        gameTitle: attributesManager.getSessionAttributes().gameTitle,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = GetRelatedGamesIntentHandler;
