const LaunchRequestHandler = (Alexa) => ({
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    );
  },
  handle(handlerInput) {
    let speakOutput = 'Benvenuti sul PlayStation Store. Vuoi cercare un gioco?';

    const supportedInterfaces = Alexa.getSupportedInterfaces(
      handlerInput.requestEnvelope
    );
    const htmlInterface = supportedInterfaces['Alexa.Presentation.HTML'];
    if (htmlInterface !== null && htmlInterface !== undefined) {
      speakOutput = 'Benvenuti sul PlayStation Store. Vuoi cercare un gioco?';
      handlerInput.responseBuilder.addDirective({
        type: 'Alexa.Presentation.HTML.Start',
        request: {
          uri: 'https://b32c-2-43-255-194.eu.ngrok.io',
          method: 'GET',
        },
        configuration: {
          timeoutInSeconds: 300,
        },
      });
    }

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
});

module.exports = LaunchRequestHandler;
