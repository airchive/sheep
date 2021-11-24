# 📚 SIP Client with sipml5 API

SIP client boilerplate made with sipml5 API.

## 🔨 Installation

Just clone this repository.

## 🚀 Usage

Move to certs folder and then create your certs using the following command:

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key.pem -out cert.pem
```

After doing that ensure that you have Node.js installed on your environment, move to the root of the project and run:

```bash
npx http-server -S -C ./certs/cert.pem -K ./certs/key.pem
```

Enjoy your calls.

## 🤝 Contributing
Pull requests are welcome. 

For major changes, please open an issue first to discuss what you would like to change.

## 💳 License
[GNU General Public License v3](https://spdx.org/licenses/GPL-3.0-or-later.html)