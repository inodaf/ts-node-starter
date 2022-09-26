# BEGIN:BUILD
FROM node:16.17-alpine3.15
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build Project
COPY . .
RUN pnpm build:prod
# END:BUILD

# Run Project
EXPOSE 3000
ENTRYPOINT [ "pnpm", "start:build:prod" ]