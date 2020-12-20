FROM node

USER root

# RUN npm install npm@latest -g
# RUN cat /root/.npm/_logs/*

WORKDIR /app

COPY src /app/src
COPY tmp /app/tmp
COPY start.sh /app/start.sh

RUN chmod 666 /app/src
RUN chmod 666 /app/tmp 
RUN chmod 755 /app/start.sh

CMD [ "/app/start.sh" ]