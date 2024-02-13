'use strict';

const Constants = require('./src/util/Constants');
const packageJSON = require('./package.json');

const {
    Client,
    Chat,
    PrivateChat,
    GroupChat,
    Message,
    MessageMedia,
    Contact,
    PrivateContact,
    BusinessContact,
    ClientInfo,
    Location,
    Poll,
    ProductMetadata,
    List,
    Buttons,
    NoAuth,
    LocalAuth,
    RemoteAuth,
    LegacySessionAuth,
    ...otherConstants
} = Constants;

module.exports = {
    Client,
    version: packageJSON.version,
    Chat,
    PrivateChat,
    GroupChat,
    Message,
    MessageMedia,
    Contact,
    PrivateContact,
    BusinessContact,
    ClientInfo,
    Location,
    Poll,
    ProductMetadata,
    List,
    Buttons,
    NoAuth,
    LocalAuth,
    RemoteAuth,
    LegacySessionAuth,
    ...otherConstants
};
