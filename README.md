# react-apollo-bookstore

React Apollo Demonstration

# to run the project

Simply do `yarn` then `yarn start`
and the project will start on `http://localhost:3000`

# improvements / todos

- UI DESIGN!!!
- Add tests to achieve a good coverage
- Move the settings to .env
- Add Intl and JSON objects for strings and tokens to make them translatable
- Add a ThemeProvider for styled-components, create a theme so that colors, fonts, sizing, spacing can be moved there
- Add a proper loader - suspense + a loader component?
- Add proper error handling
- Add 404 and other error pages

# buglist

- Adding a book to the basket then editing and changing its price won't update the basket total
- Check the fetchPolicy - is network-only needed for the edit form?
