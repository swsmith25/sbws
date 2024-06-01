FROM node:latest
USER root

# Declaring env
ENV NODE_ENV development

WORKDIR /frontend

# Installing dependencies
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm", "start"]