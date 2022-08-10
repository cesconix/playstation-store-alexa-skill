const { supportsHTMLInterface } = require('../util');

const OpenGameDetailIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'OpenGameDetailIntent'
    );
  },
  handle(handlerInput) {
    const { requestEnvelope, attributesManager, responseBuilder } =
      handlerInput;

    const gameTitle = requestEnvelope.request.intent.slots.gameTitle.value;

    const sessionAttributes = attributesManager.getSessionAttributes();
    sessionAttributes.inGameDetail = true;
    sessionAttributes.gameTitle = gameTitle;
    attributesManager.setSessionAttributes(sessionAttributes);

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'OpenGameDetailIntent',
        gameTitle,
      },
    });

    return handlerInput.responseBuilder.getResponse();
  },
});

module.exports = OpenGameDetailIntentHandler;
