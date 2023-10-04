import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'

const dataQuery = {
    dataSets: {
        resource: 'dataSets',
        id: ({ id }) => id,
        params: {
            fields: ['dataSetElements[dataElement[id, displayName,created]'],
            paging: false,
        },
    },
}
  
export function Datasets() {
    const { loading, error, data, refetch } = useDataQuery(dataQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }

    if (data) {
        console.log("API response:",data)
        //To-do: return a component using the data response 
        return <span>Data</span>
    }
}