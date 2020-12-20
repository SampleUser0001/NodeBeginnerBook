FROM node

USER root

# RUN npm install npm@latest -g
RUN npm install -g formidable
# RUN cat /root/.npm/_logs/*

WORKDIR /app

COPY src /app/src
COPY tmp /app/tmp
COPY start.sh /app/start.sh

RUN chmod 755 /app/start.sh

CMD [ "/app/start.sh" ]