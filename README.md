# Index

- [Commands](#Commands)
- [Others](#Others)
  - [Hooks](#Hooks)
    - [Before Hooks](#Before-hooks)
    - [After Hooks](#After-hooks)
        - [Note](#note)
        - [Basic Hooks](#basic-hooks)
        - [Custom Hooks](#custom-hooks)
        - [Other Hooks](#other-hooks)
        - [CheatSheet](#CheatSheet)
  - [PropTypes](#PropTypes)
  - [Router](#Router)
  - [Styled Components](#Styled-Components)

# Commands

### Create project
>``create-react-app <project-name>``

### Start project
>``npm start``

### Start tests
>``npm test``

### Reset CSS
> **styles/generic/reset.css**  
[Link](https://meyerweb.com/eric/tools/css/reset/)









# Others

## Hooks

### Before Hooks

[Lifecycle](https://devhints.io/react#lifecycle)
![Lifecle print](https://i.imgur.com/KAuzjW4.png)

### After Hooks

#### Note

- [Hooks don’t work inside classes.](https://reactjs.org/docs/hooks-overview.html#but-what-is-a-hook)  
- [Only call **Hooks at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.](https://reactjs.org/docs/hooks-overview.html#rules-of-hooks)  
- [Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)](https://reactjs.org/docs/hooks-overview.html#rules-of-hooks)

Plugin: [Linter to enforce these rules automatically.](https://www.npmjs.com/package/eslint-plugin-react-hooks)

#### Basic hooks

- [useState()](https://reactjs.org/docs/hooks-state.html)
- [useEffect()](https://reactjs.org/docs/hooks-effect.html)  
    - Side effects -  Data fetching, setting up a subscription, manually changing the DOM amd more.  
    - **Effects Without Cleanup**  
    nothing returned.
    - **Effects with Cleanup**  
    If your effect returns a function, React will run it when it is time to clean up.
    - ```
        useEffect(() => {
            document.title = `You clicked ${count} times`;  
        }, [count]); // Only re-run the effect if count changes
        ```` 
        If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.


#### Custom Hooks 
- [If a function’s name starts with ”use” and it calls other Hooks.](https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks)

#### Other Hooks
- [useContext()](https://reactjs.org/docs/hooks-reference.html#usecontext)  
- [useReducer()](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useCallback()](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useMemo()](https://reactjs.org/docs/hooks-reference.html#usememo)
- [useRef()](https://reactjs.org/docs/hooks-reference.html#useref)
- [useImperativeHandle()](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
- [useLayoutEffect()](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
- [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)


#### CheatSheet
[Hooks](https://devhints.io/react#hooks-new)
![Hooks print](https://i.imgur.com/BdPVOo1.png)


## PropTypes

````
<name-component>.propTypes = {
    <name-props>: PropTypes.<type>
};
````
- [Types](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
- [Default prop values](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)
- [Requiring single child](https://reactjs.org/docs/typechecking-with-proptypes.html#requiring-single-child)

## Router

## Styled Components

## Redux

## onChange