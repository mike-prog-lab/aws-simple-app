const ssm = require("aws-sdk.SSM")

function constructParameterEndpoint(service, parameter) {
    const env = process.env.APP_ENV.toLowerCase();
    const appName = process.env.APP_NAME.toLowerCase();

    return `/${appName}/${service}/${env}/${parameter}`;
}

module.exports.getAppPort = async () => {
    const request = ssm.getParameter({
        Name: constructParameterEndpoint('app', 'PORT'),
    });

    console.log(request);
};