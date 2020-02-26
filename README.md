
## Basic product listing/basket page

#### Objective: 
Create a basic product listing/basket page with data from:<br />
https://my-json-server.typicode.com/benirvingplt/products/products

#### Format: 
Build and test a React application that implements the following user stories. Use whatever libraries you are most comfortable with. 

##### PLT-1: Viewing product listings
Given I am on the home page
Then I am shown a list of product items (image, name, price, qty in bag)

##### PLT-2: Filter by colour
Given I am viewing all the product listings
When I choose to filter to show only black items
Then I am only shown listings for black items

##### PLT-3: Add to cart
Given I am viewing the products listings
When I press +
Then my basket qty for this item is incremented
And my total is updated to reflect the new items in my basket

##### PLT-3: Reduce quantity
Given I am viewing the products listings
When I press -
Then my basket qty for this item is decremented
And my total is updated to reflect the new items in my basket

##### PLT-4: Remove from basket
Given I am viewing the products listings
When I press remove
Then all items of this type are removed from my basket
And my total is updated to reflect the new items in my basket

## Running the app
### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## About

Created by Carlos Castillo Pardo.<br/>
info@carloscastillo.cl