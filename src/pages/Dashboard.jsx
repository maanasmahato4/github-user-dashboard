import { Container, Space } from "@mantine/core"
import Repos from "../components/repos/Repos"
import UserCard from "../components/UserCard/UserCard"
import UserInfo from "../components/userInfo/UserInfo"

function Dashboard() {

    return (
        <Container>
            <UserInfo />
            <Space h="md" />
            <UserCard />
            <Space h="md" />
            <Repos />
        </Container>
    )
}

export default Dashboard