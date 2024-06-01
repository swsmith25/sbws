SHELL := bash
BLACL := black

# committin all and pushin
commit:
	git add -A
	@read -p "commit message: " COMMITMSG; \
	git commit -m "$$COMMITMSG"
	git push