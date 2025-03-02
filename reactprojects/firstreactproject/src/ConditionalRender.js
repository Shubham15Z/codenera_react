import { useState } from "react";

function ConditionalRender()
{
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(2);


    return(
        // <div>
        //     {
        //         loggedIn ? <h1>Admin</h1> : <h1>Guest</h1>
        //     }
        // </div>

        <div>
            {
                loggedIn == 1 ? <h1>Welcome Admin</h1>
                :loggedIn == 2 ? <h1>Welcome Guest</h1>
                : <h1>Welcome User</h1>
            }
        </div>
    )

}

export default ConditionalRender;