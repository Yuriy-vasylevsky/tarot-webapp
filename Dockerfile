FROM nginx:alpine

# Копіюємо файли в nginx
COPY . /usr/share/nginx/html

# Додаємо кастомні заголовки для Telegram WebView
RUN echo 'add_header X-Frame-Options "ALLOWALL";' >> /etc/nginx/conf.d/default.conf \
 && echo 'add_header Content-Security-Policy "frame-ancestors *";' >> /etc/nginx/conf.d/default.conf

EXPOSE 80
