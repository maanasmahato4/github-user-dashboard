import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";

const LoginButton = () => {
    const { loginWithPopup } = useAuth0();

    return <Button onClick={() => loginWithPopup()}>Sign In</Button>;
};

export default LoginButton;