let calledElement = document.getElementById("called");
let hangUpButtonElement = document.getElementById("hang-up-button");

class Call {
  session = null;

  eventListener(event) {
    console.info("[info]: call.eventListener logs: ");
    console.log("Session Event: " + event.type);
  }

  makeCall() {
    console.info("[info]: call.makeCall logs: ");
    console.log("Called: " + calledElement.value);

    if (!calledElement.value) {
      window.alert("Insert a valid number.");
      return;
    }

    this.session = window.sip.newSession("call-audio", {
      audio_remote: document.getElementById("audio-remote"),
      events_listener: {
        events: "*",
        listener: this.eventListener,
      },
    });

    this.session.call(calledElement.value);

    hangUpButtonElement.addEventListener("click", this.hangUp.bind(this));
    hangUpButtonElement.disabled = false;
  }

  hangUp() {
    console.info("[info]: call.hangUp logs: ");
    console.log(this);

    this.session.hangup();

    hangUpButtonElement.removeEventListener("click", this.hangUp.bind(this));
    hangUpButtonElement.disabled = true;
    calledElement.value = null;
    calledElement.focus();
  }
}

let call = new Call();
export { call };