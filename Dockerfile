# BEGIN:BUILD
FROM node:16.17-alpine3.15 as builder
WORKDIR /build/

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build Project
COPY . .
RUN pnpm build:prod
# END:BUILD

# BEGIN:RUN
FROM node:16.17-alpine3.15
WORKDIR /app/

# Install pnpm
RUN npm install -g pnpm

# Copy output from `builder` stage
COPY --from=builder /build/dist ./dist/
COPY --from=builder /build/config ./config/
COPY --from=builder /build/prisma ./prisma/
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Run Project
EXPOSE 3000
ENTRYPOINT [ "pnpm", "start:build:prod" ]
# END:RUN
