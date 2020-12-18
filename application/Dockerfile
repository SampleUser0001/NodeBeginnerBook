FROM node

WORKDIR /app

COPY src /app/src
COPY start.sh /app/start.sh

RUN chmod 755 /app/start.sh

CMD [ "/app/start.sh" ]