pretagrelease:
	npm version prerelease
	git push --follow-tags master
	npm publish
