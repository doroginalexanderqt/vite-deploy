# React Credit Calculator
#### *Based on the vite react-ts template*


## Manual testing:

Positive:
1. Open the app
2. Enter amount, rate, term
3. The button `Calculate` should become clickable
4. Click `Calculate` or press `Enter`
5. Credit Schedule should be displayed.

Negative:
1. Open the app
2. Enter amount, rate, term
3. Try changing any value to a negative one (E.g. -5)
4. The form should become disabled, the wrong field is highlighted, Credit Schedule is not displayed.


## Working with repo
`npm i` - install packages

`npm run dev` - local development

`npm run lint` - run vite eslint presets

`npm run build` - build the app
