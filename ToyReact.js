export const ToyReact = {
    createElement(type, attribute, ...children) {
        console.log(type);
        const el = document.createElement(type);
        console.log(el);

        for (var name in attribute) {
            el.setAttribute(name, attribute[name]);
        }
        console.log(children);
        for (var e of children) {
            if (typeof e === 'string') {
                console.log(e);
                e = document.createTextNode(children)
            }
            el.appendChild(e);
        }

        return el;
    }
}