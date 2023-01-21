import { Button, Card, Flex, Group, Image, ScrollArea, Text } from '@mantine/core';
import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { MdBusiness, MdLocationOn } from 'react-icons/md';
import './usercard.css';

function UserCard() {
    const { githubUser, githubFollowers } = useContext(GithubContext);
    const { avatar_url, html_url, name, company, bio, location, twitter_username } = githubUser;
    return (
        <Flex wrap="wrap" direction="row" justify="space-evenly">
            <Card className='usercard-width' shadow="lg">
                <Text size="lg" weight={600} mb="md">User</Text>
                <Group position="apart">
                    <Flex direction="row" justify="right">
                        <Image src={avatar_url} height={60} width={60} alt={name} />
                        <Group display="block" mx="md">
                            <Text weight={600}>{name}</Text>
                            <Text size="sm" weight={500} color="dimmed">@{twitter_username || 'John_doe'}</Text>

                        </Group>
                    </Flex>
                    <a href={html_url} target="_blank"><Button>Follow</Button></a>
                </Group>
                <Text mt="sm" weight={400}>{bio}</Text>
                <Group>

                </Group>
                <Group position="left" mt="sm">
                    <MdBusiness size={24} color="gray" /><Text weight={500}>{company}</Text>
                </Group>
                <Group position='left' mt="sm">
                    <MdLocationOn size={24} color="gray" /><Text weight={500}>{location}</Text>
                </Group>
            </Card>
            <Card className='usercard-width' shadow="lg">
                <Text size="lg" weight={600} mb="md">Followers</Text>
                <ScrollArea style={{ height: "30%" }}>
                    {
                        githubFollowers.map((follower, idx) => {
                            const { login, avatar_url, html_url } = follower;
                            return <Card.Section key={idx} mt="md" mb="md" style={{ width: "95%" }} px="md">
                                <Group position="apart">
                                    <div>
                                        <Image height={60} width={60} src={avatar_url} alt={login} />
                                        <a href={html_url} target="_blank" style={{ textDecoration: "none" }}><Text color="dimmed" size="sm" weight={300}>{html_url}</Text></a>
                                    </div>
                                    <Text size="lg" weight={600}>{login}</Text>
                                </Group>
                            </Card.Section>
                        })
                    }
                </ScrollArea>
            </Card >
        </Flex >

    )
}

export default UserCard