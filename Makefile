pretty:
	npm version prerelease
	git push --follow-tags origin master
	npm publish
