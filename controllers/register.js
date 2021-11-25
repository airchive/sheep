import call from "./call.js";
import stack from "./stack.js";

class Register {
  session = null;

  eventListener = (event) => {
    let isClientConnected = event.type == "connected";
    let isSessionEstablished = event.session == this.session;
    let isReadToCall = isClientConnected && isSessionEstablished;

    if (isReadToCall) {
      let callButton = document.getElementById("call-button");
      
      callButton.addEventListener("click", call.makeCall);
      callButton.disabled = false;
    }
  }

  init() {
    this.session = stack.sip.newSession("register", {
      events_listener: {
        events: "*",
        listener: this.eventListener,
      },
    });

    this.session.register();
  }
}

let register = new Register;
export { register };