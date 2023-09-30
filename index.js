import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server';

//server setup
const server = new ApolloServer({

})

const {url} = await startStandaloneServer(server,{
    listen: {port: 4000 }
})