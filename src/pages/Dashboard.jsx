import { Container, Space, Loader } from "@mantine/core"
import { useContext } from "react"
import NavBar from "../components/navbar/NavBar"
import Repos from "../components/repos/Repos"
import Search from "../components/search/Search"
import UserCard from "../components/usercard/UserCard"
import UserInfo from "../components/userInfo/UserInfo"
import { GithubContext } from "../context/context"

function Dashboard() {
    const { loading } = useContext(GithubContext);

    if (loading === true) {
        return (
            <Container style={{ width: "100%" }}>
                <NavBar />
                <Space h="lg" />
                <Search />
                <Space h="md" />
                <div style={{ marginInline: "auto", marginBlock: "auto" }} >
                    <Loader size={50} style={{ marginLeft: "50%", marginBlock: "20%" }} />
                </div>
            </Container >
        )
    }
    return (
        <Container>
            <NavBar />
            <Space h="lg" />
            <Search />
            <Space h="md" />
            <UserInfo />
            <Space h="md" />
            <UserCard />
            <Space h="md" />
            <Repos />
        </Container>
    )
}

export default Dashboard