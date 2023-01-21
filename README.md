# 🪶 Sheep
SIP client PoC written in JavaScript and sipml5 API.  
&nbsp;

## 📦 Installation  
Follow the steps below to make use of Sheep.
&nbsp;

1. Ensure that you have the following dependencies installed:  
- [Node.js](https://nodejs.org/en/)  

2. Clone this repository:  
```bash
git clone https://github.com/airchive/sheep.git
```

3. Move to certs folder and then create your certs using the following command:
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key.pem -out cert.pem
```

4. After doing that, move to the root of the project and run:
```bash
npx http-server -S -C ./certs/cert.pem -K ./certs/key.pem
```

5. Enjoy your calls.  
&nbsp;

## 🤝 Contributing  
Contributions and suggestions about how to improve this project are welcome!  
&nbsp;  

## 💚 Support  
If you want to support my work you can do it with the links below.  

Choose what you find more suitable for you:  
- [Support me on GitHub](https://github.com/sponsors/Airscripts)  
- [Support me via linktr.ee](https://linktr.ee/airscript)  

Thank you so much, it means a lot for me!  
&nbsp;  

## 💳 License  
This repository is licensed under [GPL-3.0 License](https://github.com/airchive/sheep/blob/main/LICENSE).  
&nbsp;
