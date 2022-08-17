require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();

const schema = require("./schema/schema");

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
    })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
