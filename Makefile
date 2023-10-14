build-front:
	docker build -t frontend:latest ./frontend
	docker run --rm -v ./frontend:/app -w /app frontend:latest "yarn tsc && yarn vite build"

gen-certs:
	mkdir -p certificates
	openssl req -x509 -newkey rsa:4096 \
		-keyout certificates/cert.key \
		-out certificates/cert.crt -\
		sha256 -days 3650 -nodes \
		-subj "/CN=localhost"

backend-prepare:
	docker compose up -d app postgres
	docker compose exec -it app python3 manage.py migrate
	docker compose exec -it app python3 manage.py collectstatic
	docker compose exec -it \
		-e DJANGO_SUPERUSER_USERNAME=admin \
		-e DJANGO_SUPERUSER_PASSWORD=Qwer1234 \
		-e DJANGO_SUPERUSER_EMAIL=admin@example.com \
		app python3 manage.py createsuperuser --noinput