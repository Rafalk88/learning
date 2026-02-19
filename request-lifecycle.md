click -> browser (user-agent) -> proxies -> server -> router -> controller -> service -> DB -> browser (user-agent) -> UI

User click sth on website. The browser identity the ip from where to send request by TLC. Then starts TCP conection (first by certificate, then by keys). When it is connected then request is send. Request have method, headers and body. Server gets request, process it and get back response with headers and body. User-agent get response and shiw it to user in ui.
