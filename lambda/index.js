const Alexa = require('ask-sdk-core');

const {
  LaunchRequestHandler,
  HelloWorldIntentHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  FallbackIntentHandler,
  SessionEndedRequestHandler,
  IntentReflectorHandler,
  ErrorHandler,
  SearchGameByTitleIntentHandler,
  SearchGameByCategoryIntentHandler,
  OpenGameDetailIntentHandler,
  SpeakIntentHandler,
  GetGamePriceByTitleIntent,
  GetGamePriceIntent,
  CloseGameDetailIntentHandler,
} = require('./handlers');

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler(Alexa),
    OpenGameDetailIntentHandler(Alexa),
    CloseGameDetailIntentHandler(Alexa),
    SearchGameByTitleIntentHandler(Alexa),
    SearchGameByCategoryIntentHandler(Alexa),
    GetGamePriceByTitleIntent(Alexa),
    GetGamePriceIntent(Alexa),
    SpeakIntentHandler(Alexa),
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
