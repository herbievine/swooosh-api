# !/bin/sh

# Installs new packages
PACKAGES=""
PACKAGES="${PACKAGES} @types/express-rate-limit"
PACKAGES="${PACKAGES} @types/express-slow-down"

echo 'Installing new packages...'
for PACKAGES in ${PACKAGES}; do
    mpm i -D ${PACKAGES};
done

npm i
npm i -g typescript@latest
npm run build