import { register } from "./register.js";
import { configs } from "../configs.js";

class Stack {
  sip = null;

  eventListener(event) {
    console.info("[info]: stack.eventListener logs: ");
    console.log(event);

    switch (event.type) {
      case "starting":
        break;

      case "started":
        register.init();
        break;
    }
  }

  create() {
    let conf = configs.sip;

    this.sip = new SIPml.Stack({
      realm: conf.realm,
      impi: conf.impi,
      impu: conf.impu,
      password: conf.password,
      display_name: conf.display_name,
      websocket_proxy_url: conf.websocket_proxy_url,
      ice_servers: conf.ice_servers,
      enable_rtcweb_breaker: conf.enable_rtcweb_breaker,
      events_listener: {
        events: "*",
        listener: this.eventListener,
      },
    });

    window.sip = this.sip;
  }

  init(event) {
    console.info("[info]: stack.init logs: ");
    console.log(event);
    this.create();
  }

  error(event) {
    console.info("[info]: stack.error logs: ");
    console.log(event);
    console.error("Failed to initialize the engine: " + event.message);
  }
}

let stack = new Stack();
export default stack;