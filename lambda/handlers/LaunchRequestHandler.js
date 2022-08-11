const { supportsHTMLInterface } = require('../util');

const LaunchRequestHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    let speakOutput =
      'Benvenuti su PlayStation Store. Se ti serve poter cercare videogiochi, per titolo o categoria, comprarli o sapere loro specifiche, puoi chiedere a me.';

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.Start',
      request: {
        uri: 'https://b642-2-43-255-194.eu.ngrok.io',
        // uri: 'https://playstation-store.vercel.app',
        method: 'GET',
      },
      configuration: {
        timeoutInSeconds: 300,
      },
    });

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
});

module.exports = LaunchRequestHandler;
