/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorHandler = (Alexa) => ({
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const speakOutput = "L'errore è:" + error.message;
    // console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

    handlerInput.responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'Error',
        error,
      },
    });

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
});

module.exports = ErrorHandler;
