# REB - 06

**Learning goals**
- Basic React Router v6 usage
- NavLink with .active styling

**PREVIOUSLY**
- Styling React apps with Tailwind

**TODAY**
- More Routing

<br>

## Routing

- Reminder: what separates an SPA and a regular HTML/CSS website?
    - No page reloads
    - Single HTML
    - JS controls the elements on the page

- In regular webpages a nice, useful, feature is clicking the "back" button
    - In SPA the back button doesn't really work...
    - ...unless we make it work!

- The back and forward button are part of the _History API_
    - JavaScript has access to control the history
    - Also, partly you can control the address bar
    - But you can't change the URL from `evil-hacker.com` to show `mybank.com` (the domain)


### A simple example of browsing the Internet

1. Go to `https://www.iana.org`
    - The Browser sends a GET request
    - A server processes the request and returns index.html

2. Click on **Domain Names**, the URL changes to `https://www.iana.org/domains`
    - The Browser sends a GET request
    - A server processes the request and returns domains.html

- These are Two separate pages
    - The browser sends a new request for each page
    - The server processes the request and returns a new page

- In React and SPAs, you have _views_ instead of pages
    - Home view
    - Products view
    - Users view
    - etc.

### The History API and React

- In React and SPAs in general, controlling the history is called `routing`
- In React, routing is not built into the core of React
    - One reason is because React is used in native mobile apps
    - Mobile apps don't have a URL or anything like that
    - The same core of React is used in `react-native` and React for the web
    - There are also multiple ways to do routing, it can be complex

- Routing takes care of going back/forward between views
    - From "Home" to "Contacts"
    - From "Contacts" to "Products" etc.


- Routing also takes care of loading a specific view based on URLs
    - If you visit https://www.example.com/products directly
    - React should directly show the products view

- A React router
    - Allows users to navigate from page to page _without a full page load_
    - It will appear faster as only the content is updated, not the entire page

## React Router

- The router we will use is `react-router-dom`
    - How can I find more info on this thing?
        - Googling
        - Asking Copilot
        - npmjs.com/package/react-router-dom



- The "Layout" and "Outlet" gives us flexibility
    - We could have multiple routes with the same layout
    - We could group some routes together with different layouts

- We could have a set of routes for normal pages

    - `/products` (MainLayout)
    - `/careers` (MainLayout)

- We could have a second set of routes for documentation pages

    - `/docs/software` (DocumentationLayout)
    - `/docs/laptops` (DocumentationLayout)

- That could look like this

    ```jsx
        <Route path="/" element={<MainLayout />}>
            <Route path="products" element={<Products />} />
            <Route path="careers" element={<Register />} />
        </Route>
        <Route path="/docs" element={<DocumentationLayout />}>
            <Route path="software" element={<Software />} />
            <Route path="laptops" element={<Laptops />} />
        </Route>
    ```

## Wrap-up

- JS has access to the History API to control back/forwards and the URL
- In an SPA you need Routing to make back/forwards and URL loading work
- We will use `react-router-dom`


## Self-study prompts

- In addition to `BrowserRouter` `react-router-dom` has `HashRouter` - try it!
