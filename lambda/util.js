const AWS = require('aws-sdk');

/**
 *
 */
const s3SigV4Client = new AWS.S3({
  signatureVersion: 'v4',
  region: process.env.S3_PERSISTENCE_REGION,
});

/**
 *
 * @param {*} s3ObjectKey
 * @returns
 */
module.exports.getS3PreSignedUrl = function getS3PreSignedUrl(s3ObjectKey) {
  const bucketName = process.env.S3_PERSISTENCE_BUCKET;
  const s3PreSignedUrl = s3SigV4Client.getSignedUrl('getObject', {
    Bucket: bucketName,
    Key: s3ObjectKey,
    Expires: 60 * 1, // the Expires is capped for 1 minute
  });
  console.log(`Util.s3PreSignedUrl: ${s3ObjectKey} URL ${s3PreSignedUrl}`);
  return s3PreSignedUrl;
};

/**
 *
 * @param {*} handlerInput
 * @param {*} Alexa
 * @returns
 */
module.exports.supportsHTMLInterface = function supportsHTMLInterface(
  handlerInput,
  Alexa
) {
  const supportedInterfaces = Alexa.getSupportedInterfaces(
    handlerInput.requestEnvelope
  );
  const htmlInterface = supportedInterfaces['Alexa.Presentation.HTML'];
  return htmlInterface !== null && htmlInterface !== undefined;
};

/**
 *
 * @param {*} handlerInput
 * @returns
 */
module.exports.getSession = function (handlerInput) {
  const { attributesManager } = handlerInput;
  const { product } = attributesManager.getSessionAttributes();
  return product;
};

/**
 *
 * @param {*} product
 * @param {*} handlerInput
 */
module.exports.saveSession = function (product, handlerInput) {
  const { attributesManager } = handlerInput;

  const sessionAttributes = attributesManager.getSessionAttributes();
  sessionAttributes.product = product;
  attributesManager.setSessionAttributes(sessionAttributes);
};

/**
 *
 * @param {*} handlerInput
 */
module.exports.clearSession = function (handlerInput) {
  const { attributesManager } = handlerInput;

  const sessionAttributes = attributesManager.getSessionAttributes();
  sessionAttributes.product = null;
  attributesManager.setSessionAttributes(sessionAttributes);
};
