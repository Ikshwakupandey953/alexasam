FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ikshwakupandey953/alexasam /root/ales
WORKDIR /root/ales/
RUN git clone https://github.com/ikshwakupandey953/Config
RUN git clone https://github.com/ikshwakupandey953/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
