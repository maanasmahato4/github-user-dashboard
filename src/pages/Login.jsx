import { Center, Group } from '@mantine/core';
import LoginButton from '../components/login/Login';

function Login() {
    return (
        <Center style={{ height: 200 }}>
            <Group display="block">
                <h1>Please SignIn to get access</h1>
                <LoginButton />
            </Group>

        </Center>
    )
}

export default Login;