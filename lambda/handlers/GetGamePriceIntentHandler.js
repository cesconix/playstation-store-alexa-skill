const { supportsHTMLInterface } = require('../util');

const GetGamePriceIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope, attributesManager } = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();
    
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'GetGamePriceIntent' &&
      sessionAttributes && sessionAttributes.inGameDetail
    );
  },
  handle(handlerInput) {
    const { attributesManager, responseBuilder } = handlerInput;

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'GetGamePriceIntent',
        gameTitle: attributesManager.getSessionAttributes().gameTitle,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = GetGamePriceIntentHandler;
