import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.error(error);
    
    return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Hemos colapsado garrafalmente</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      );
    }

export default ErrorPage;