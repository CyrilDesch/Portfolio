FROM nginx:stable-alpine as build
COPY nginx.conf /etc/nginx/nginx.conf
COPY build/ /app
