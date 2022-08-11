const { supportsHTMLInterface } = require('../util');

function getRequestMessage(requestEnvelope) {
  return requestEnvelope.request.message || {};
}

const SaveGameIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { intent } = getRequestMessage(handlerInput.requestEnvelope);
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        'Alexa.Presentation.HTML.Message' &&
      intent === 'SaveGameIntent' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    const { product } = getRequestMessage(handlerInput.requestEnvelope);

    const sessionAttributes = attributesManager.getSessionAttributes();
    sessionAttributes.product = product;
    attributesManager.setSessionAttributes(sessionAttributes);

    return responseBuilder.getResponse();
  },
});

module.exports = SaveGameIntentHandler;
