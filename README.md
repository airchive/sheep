# Sheep
SIP client PoC written in JavaScript and sipml5 API.

## Contents
- [Installation](#installation)
- [Usage](#usage)
- [Resources](#resources)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Installing
Follow the steps below to make use of Sheep.

Ensure that you have the following dependencies installed:
- [Node.js](https://nodejs.org/en/)

Clone this repository:
```bash
git clone https://github.com/airchive/sheep.git
```

Move to certs folder and then create your certs using the following command:
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key.pem -out cert.pem
```

## Usage
After doing that, move to the root of the project and run:
```bash
npx http-server -S -C ./certs/cert.pem -K ./certs/key.pem
```

Enjoy your calls.

## Resources
404

## Contributing
Contributions and suggestions about how to improve this project are welcome!
Please follow [our contribution guidelines](https://github.com/airchive/sheep/blob/main/CONTRIBUTING.md).

## Support
If you want to support my work you can do it by following me, leaving a star, sharing my projects or also donating at the links below.  
Choose what you find more suitable for you:  

<a href="https://sponsor.airscript.it" target="blank">
  <img src="https://raw.githubusercontent.com/airchive/assets/main/images/github-sponsors.svg" alt="GitHub Sponsors" width="30px" />
</a>&nbsp;
<a href="https://kofi.airscript.it" target="blank">
  <img src="https://raw.githubusercontent.com/airchive/assets/main/images/kofi.svg" alt="Kofi" width="30px" />
</a>

## License  
This repository is licensed under [GPL-3.0 License](https://github.com/airchive/sheep/blob/main/LICENSE).
