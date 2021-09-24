import Error404 from "./400/404";
import Error500 from "./500/500";

const ErrorRoutes = [
    {
        path: "/error/400",
        render: Error404,
        exact: true
    },
    {
        path: "/error/500",
        render: Error500,
    }
];

export default ErrorRoutes;