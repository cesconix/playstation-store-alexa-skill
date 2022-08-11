const { supportsHTMLInterface } = require('../util');

const GetGameDescriptionIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'GetGameDescriptionIntent'
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
        intent: 'GetGameDescriptionIntent',
        gameTitle: attributesManager.getSessionAttributes().gameTitle,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = GetGameDescriptionIntentHandler;
