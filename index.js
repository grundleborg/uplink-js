export default class Client {
    constructor(server, key) {
        this.server = server;
        this.key = key;
    };

    track(event, data) {
        let payload = {
            source: this.key,
            schema: event,
            client_timestamp: (new Date()).getTime(),
            data: data,
        };
        return fetch(this.server, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(payload),
        });
    }
}
