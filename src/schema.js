const { gql } = require('apollo-server');

const typeDefs = gql`
    type Country {
        slug: String!
        name: String!
        isoCode: String     
    }

    interface Summary {
        newConfirmed: Int
        totalConfirmed: Int
        newDeaths: Int
        totalDeaths: Int
        newRecovered: Int
        totalRecovered: Int
        lastUpdated: String
    }

    type WorldSummary implements Summary {
        newConfirmed: Int
        totalConfirmed: Int
        newDeaths: Int
        totalDeaths: Int
        newRecovered: Int
        totalRecovered: Int
        lastUpdated: String
    }

    type CountrySummary implements Summary {
        slug: String
        countryName: String
        newConfirmed: Int
        totalConfirmed: Int
        newDeaths: Int
        totalDeaths: Int
        newRecovered: Int
        totalRecovered: Int
        lastUpdated: String
    }

    enum Status {
        CONFIRMED
        RECOVERED
        DEATHS
        ALL
    }

    enum StatusMatrix {
        TotalConfirmed
        NewConfirmed
        TotalDeaths
        NewDeaths
        NewRecovered
        TotalRecovered
    }

    type Statistics {
        countryName: String!
        state: String
        lat: String
        lon: String
        noOfCases: Int
        status: String!
        lastUpdated: String
    }

    type Query {
        listCountries: [Country],
        worldDailySummary: WorldSummary,
        countryDailySummary(slug: String!): CountrySummary,
        findFromDayOne(slug: String!, status: Status!): [Statistics]
        topCasesByStatus(status: StatusMatrix!, range: Int): [CountrySummary]
    }
`;

module.exports = typeDefs;