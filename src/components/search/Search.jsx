import { Button, Grid, TextInput, Text, Group } from '@mantine/core';
import { useState, useContext } from 'react';
import { GithubContext } from '../../context/context';

function Search() {
    const { requests, error, fetchSearchUser, searchError, loading } = useContext(GithubContext);
    const [user, setUser] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSearchUser(user);
        setUser('');
    }

    return (
        <Group position="right" mx="md">
            <TextInput style={{ width: "100%" }} disabled={error.show ? true : false} placeholder={'Search Github User'} onChange={(e) => setUser(e.target.value)} rightSection={requests > 0 && loading === false && <Button onClick={handleSubmit}>Search</Button>} error={searchError.show ? searchError.msg : ''} />
            <Text size="md" weight={200} color="dimmed">Requests: {requests}/60</Text>
        </Group>
    )
}

export default Search;