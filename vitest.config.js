const { defineConfig } = require('vitest/config');
export default defineConfig({
	test: {
		includeSource: ['*.{js,ts}'],
	}
})
