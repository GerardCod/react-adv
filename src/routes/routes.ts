import { LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

export interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}



export const routes: Route[] = [
    {
        to: '/shopping-page',
        path: 'shopping-page',
        Component: ShoppingPage,
        name: 'Lazy Layout Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]