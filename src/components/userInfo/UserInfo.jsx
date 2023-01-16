import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { GoGist, GoRepo } from 'react-icons/go';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { Card, Container, Flex, Group, Text } from '@mantine/core';
import './user_style.css';

function UserInfo() {
    const { githubUser } = useContext(GithubContext);
    const { public_repos, followers, following, public_gists } = githubUser;

    const items = [
        {
            id: 1,
            icon: <GoRepo size={24} color="pink" />,
            label: 'Repos',
            value: public_repos,
        },
        {
            id: 2,
            icon: <FiUsers size={24} color='green' />,
            label: 'Followers',
            value: followers,

        },
        {
            id: 3,
            icon: <FiUserPlus size={24} color='purple' />,
            label: 'following',
            value: following,
        },
        {
            id: 4,
            icon: <GoGist size={24} color='yellow' />,
            label: 'Gists',
            value: public_gists,
        },

    ]
    return (
        <Container>
            <Flex wrap="wrap" direction="row" justify="space-evenly" >
                {items.map(item => {
                    const { id, icon, label, value } = item;
                    return <Card key={id} shadow="lg" m="md" p="lg" className='card-width'>
                        <Text weight={500}>{label}</Text>
                        <Group position="left" mt="lg">
                            <span>{icon}</span>
                            <Text weight={600} size="lg">{value}</Text>
                        </Group>
                    </Card>
                })}
            </Flex>

        </Container>
    )
}

export default UserInfo