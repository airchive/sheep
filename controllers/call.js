import stack from "./stack.js";

class Call {
  session = null;
  callText = document.getElementById("call-text");
  callButton = document.getElementById("call-button");
  calledInput = document.getElementById("called-input");
  audioRemote = document.getElementById("audio-remote");
  hangUpButton = document.getElementById("hang-up-button");

  eventListener = (event) => {
    console.log(event);
    switch (event.type) {
      case "connecting":
        this.callText.textContent = event.description;
        break;

      case "connected":
        this.callText.textContent = event.description;
        this.holdButton.addEventListener("click", this.holdCall);
        this.holdButton.disabled = false;
        break;

      case "terminating":
      case "terminated":
        this.hangUpButton.removeEventListener("click", this.hangUp);
        this.hangUpButton.disabled = true;
        this.callText.textContent = "";
        this.calledInput.value = null;
        this.callButton.disabled = false;
        this.calledInput.focus();
        break;
    }
  }

  makeCall = () => {
    if (!this.calledInput.value) {
      window.alert("Insert a valid number.");
      return;
    }

    this.session = stack.sip.newSession("call-audio", {
      audio_remote: this.audioRemote,

      events_listener: {
        events: "*",
        listener: this.eventListener,
      },
    });

    this.session.call(this.calledInput.value);
    this.callButton.disabled = true;
    this.hangUpButton.addEventListener("click", this.hangUp);
    this.hangUpButton.disabled = false;
    this.hangUpButton.focus();
  }

  hangUp = () => {
    this.session.hangup();
  }
}

let call = new Call();
export default call;