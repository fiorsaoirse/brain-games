start:
	npx babel-node -- src/index.js
publish:
	npm publish
lint: 
	npx eslint src/
