
## Router

````
npm install react-router-dom
````

````
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<page1/>} />
      <Route path="/route" element={<page2/>} />
    </Routes>
````
 - [Nested Routes](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#advantages-of-route-element)
    - ````<Outlet />````

 - [Routes Hooks](https://reactrouter.com/web/api/Hooks)
    - [useParams()](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#upgrade-to-react-router-v51)
    - [useNavigate()](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#use-navigate-instead-of-history)
    - [useRoutes()](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#use-useroutes-instead-of-react-router-config)
        - Define your routes as JavaScript objects instead of using React elements
