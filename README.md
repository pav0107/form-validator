This is a simple form validator. I set up the following logic:

- The username must be between 3 and 15 characters.
- The email must be of a valid format (I used a regular expression rather than type="email" in the HTML so I could get a custom error message).
- The password should contain at least 8 characters, 1 capital letter, 1 number and 1 special character (I used a regular expression here too, again, so I could use a custom error message)
- The password needs to be confirmed.

I've shown errors in any of the above by using a small error message below the relevant box and outlining the box in red.

Boxes filled in correctly are outlined in green.

<!-- Password validation from stackoverflow -->

https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

<!-- Email validation from stackoverflow -->

https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
