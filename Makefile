all: node_modules

node_modules: package.json pnpm-lock.yaml
	@echo '⚡️ Installing Volta...'
	@[ -n "$(which volta)" ] || curl https://get.volta.sh | bash
	@echo '📚 Installing pnpm...'
	@[ -n "$(which pnpm)" ] || curl -fsSL https://get.pnpm.io/install.sh | sh -
	@echo '🧱 Setting up project...'
	@volta fetch node
	@pnpm install
	@cp .env.sample .env
	@pnpm prisma generate

clean:
	@rm -rf dist coverage

clean_hard: clean
	@rm -rf node_modules

.PHONY: clean clean_hard