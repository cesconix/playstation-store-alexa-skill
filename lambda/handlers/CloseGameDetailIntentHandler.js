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
    const { responseBuilder, attributesManager } = handlerInput;

    const sessionAttributes = attributesManager.getSessionAttributes();
    sessionAttributes.product = null;
    attributesManager.setSessionAttributes(sessionAttributes);

    // responseBuilder.addDirective({
    //   type: 'Alexa.Presentation.HTML.HandleMessage',
    //   message: {
    //     intent: 'CloseGameDetailIntent',
    //   },
    // });

    const speakOutput = 'pulisco la sessione';
    return responseBuilder.speak(speakOutput).getResponse();
  },
});

module.exports = CloseGameDetailIntentHandler;
