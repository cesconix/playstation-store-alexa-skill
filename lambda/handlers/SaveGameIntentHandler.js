const { supportsHTMLInterface, saveSession } = require('../util');

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
    const { requestEnvelope, responseBuilder } = handlerInput;

    const { product } = getRequestMessage(requestEnvelope);

    saveSession(product, handlerInput);

    return responseBuilder
      .speak(`ho salvato ${product.name} in sessione`)
      .getResponse();
  },
});

module.exports = SaveGameIntentHandler;
