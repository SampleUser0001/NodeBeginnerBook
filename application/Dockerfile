FROM node

RUN npm install -g formidable

WORKDIR /app

COPY src /app/src
COPY tmp /app/tmp
COPY start.sh /app/start.sh


RUN chmod 755 /app/start.sh

CMD [ "/app/start.sh" ]