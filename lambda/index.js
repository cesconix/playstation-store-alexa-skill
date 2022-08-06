const Alexa = require('ask-sdk-core');

const {
  //LaunchRequestHandler,
  HelloWorldIntentHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  SessionEndedRequestHandler,
  IntentReflectorHandler,
  ErrorHandler,
} = require('./handlers');

const LaunchRequestHandler = {
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
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler(Alexa),
    HelpIntentHandler(Alexa),
    CancelAndStopIntentHandler(Alexa),
    FallbackIntentHandler(Alexa),
    SessionEndedRequestHandler(Alexa),
    IntentReflectorHandler(Alexa)
  )
  .addErrorHandlers(ErrorHandler(Alexa))
  .withCustomUserAgent('sample/hello-world/v1.2')
  .lambda();
