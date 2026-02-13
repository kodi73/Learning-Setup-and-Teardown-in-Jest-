let resource = null;

function openResource() {
    resource = {
        connected: true,
    };
};

function closeResource() {
    resource.connected = false;
}

function isConnected() {
    return resource.connected;
}

module.exports = { openResource, closeResource, isConnected };