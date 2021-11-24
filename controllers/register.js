import { call } from "./call.js";

class Register {
  session = null;

  eventListener(event) {
    console.info("[info]: register.eventListener logs: ");
    console.log(event);
    console.log(this);
    console.log("Session Event: " + event.type);

    let isClientConnected = event.type == "connected";
    let isSessionEstablished = event.session == this;
    let isReadToCall = isClientConnected && isSessionEstablished;

    if (isReadToCall) {
      console.log("Connected to PBX.");

      let callButton = document.getElementById("call-button");
      callButton.addEventListener("click", call.makeCall.bind(call));
      callButton.disabled = false;
    }
  }

  init() {
    this.sess = "blabla"
    this.session = window.sip.newSession("register", {
      events_listener: {
        events: "*",
        listener: this.eventListener,
      },
    });

    this.session.register(this);
  }
}

let register = new Register;
export { register };