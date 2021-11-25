import { configs } from "../configs.js";
import { register } from "./register.js";

class Stack {
  sip = null;

  eventListener = (event) => {
    switch (event.type) {
      case "starting":
        break;

      case "started":
        register.init();
        break;
    }
  }

  create = () => {
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
  }

  init = (event) => {
    this.create();
  }

  error = (event) => {
    console.error("Failed to initialize the engine: " + event.message);
  }
}

let stack = new Stack();
export default stack;