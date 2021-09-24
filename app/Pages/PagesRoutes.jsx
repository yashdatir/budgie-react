import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";


const PagesRoutes = [
    {
        path: "/page/1",
        component: Page1,
        exact: true
    },
    {
        path: "/page/2",
        component: Page2,
        exact: true
    }
];

export default PagesRoutes;