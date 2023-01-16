import { Button, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";


function Error() {
    const navigate = useNavigate();
    return (
        <Container style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: "10rem", margin: "0" }}>404</h1>
            <p style={{ fontSize: "3rem" }}>Page Not Found!</p>
            <Button color="gray" onClick={() => navigate("/")}>Return To Home Page</Button>
        </Container>
    )
}

export default Error;