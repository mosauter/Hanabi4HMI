FROM python:3.11-slim@sha256:9e1912aab0a30bbd9488eb79063f68f42a68ab0946cbe98fecf197fe5b085506 as builder

WORKDIR /build

RUN rm -f /etc/apt/apt.conf.d/docker-clean; echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
RUN --mount=type=cache,target=/var/lib/apt \
    --mount=type=cache,target=/var/cache/apt \
    apt-get update && apt-get install -y --no-install-recommends \
    git=1:2.39.5-0+deb12u2 \
    cmake=3.25.1-1 \
    npm=9.2.0~ds1-1 \
    gcc=4:12.2.0-3 \
    g++=4:12.2.0-3


RUN --mount=type=bind,rw,target=. \
    --mount=type=cache,target=/root/.cache/pip \
    pip install .

FROM python:3.11-slim@sha256:9e1912aab0a30bbd9488eb79063f68f42a68ab0946cbe98fecf197fe5b085506

COPY --from=builder /usr/local /usr/local

EXPOSE 8000
ENTRYPOINT [ "/usr/local/bin/hanabi" ]
