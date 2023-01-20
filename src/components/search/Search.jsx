import { Button, Grid, TextInput, Text } from '@mantine/core';
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
        <Grid gutter={35} justify="flex-end">
            <Grid.Col span={8}> <TextInput style={{ width: "100%" }} disabled={error.show ? true : false} placeholder={'Search Github User'} onChange={(e) => setUser(e.target.value)} rightSection={requests > 0 && loading === false && <Button onClick={handleSubmit}>Search</Button>} error={searchError.show ? searchError.msg : ''} /></Grid.Col>
            <Grid.Col span={3}> <Text size="xl" weight={200} color="dimmed">Requests: {requests}/60</Text></Grid.Col>
        </Grid>
    )
}

export default Search;