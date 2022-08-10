const { supportsHTMLInterface } = require('../util');

const CloseGameDetailIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'CloseGameDetailIntent'
    );
  },
  handle(handlerInput) {
    const { requestEnvelope, attributesManager, responseBuilder } =
      handlerInput;

    const sessionAttributes = attributesManager.getSessionAttributes();
    sessionAttributes.inGameDetail = false;
    sessionAttributes.gameTitle = null;
    attributesManager.setSessionAttributes(sessionAttributes);

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'CloseGameDetailIntent',
        gameTitle,
      },
    });

    return responseBuilder.getResponse();
  },
});

module.exports = CloseGameDetailIntentHandler;
