## Styled Components

````
npm install --save styled-components
````
- [Define Styled Components outside of the render method](https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method)
    - It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass.
- [Adapting based on Props](https://styled-components.com/docs/basics#adapting-based-on-props)
    - ````color: ${props => props.primary ? "white" : "palevioletred"};```` 
- [Extending styles](https://styled-components.com/docs/basics#extending-styles)
    - new component that inherits the styling of another.
        - ````const <new-component> = styled(<other-component>)`<styles-new-component>`; ````
    - change which tag or component a styled component renders.
        - ````<Button as="<which-tag>" href="/">Link with Button styles</Button>````
- [Pseudoelements, pseudoselectors, and nesting](https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting)
    - **Allowed**: &, :hover, :active and others.  
        - If you put selectors in without the ampersand, they will refer to children of the component.
