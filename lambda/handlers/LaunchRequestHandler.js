const { supportsHTMLInterface } = require('../util');

const LaunchRequestHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest' &&
      supportsHTMLInterface(handlerInput, Alexa)
    );
  },
  handle(handlerInput) {
    let speakOutput = 'Benvenuti sul PlayStation Store. Vuoi cercare un gioco?';

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.Start',
      request: {
        uri: 'https://playstation-store.vercel.app/',
        method: 'GET',
      },
      configuration: {
        timeoutInSeconds: 300,
      },
    });

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        // .reprompt(speakOutput)
        .getResponse()
    );
  },
});

module.exports = LaunchRequestHandler;
