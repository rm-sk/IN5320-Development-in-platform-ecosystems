import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem } from '@dhis2/ui'

import { useState } from "react";

// const dataQuery = {
//     response: {
//         resource: 'dataSets',
//         params: {
//             fields: ['dataSetElements[dataElement[id, displayName,created]'],
//             paging: false,
//         },
//     },
// }

const dataQuery = {
    res: {
        resource: "/dataSets",
        params: {
            fields: "id,displayName,created",
            paging: "false"
        }
    }
}
  
export function Datasets() {
    const { loading, error, data } = useDataQuery(dataQuery);

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }

    if (data) {
        console.log("API response:",data)
        const [sideMenu, setSideMenu] = useState("none");
        const [fullMenu, setFullMenu] = useState("block");

        

       

        // const sideMenu = 'block';
        // const fullMenu = 'none';

        const seeTable = () => {
            setFullMenu("none");
            setSideMenu("block");
        };

        const hideTable = () => {
            setFullMenu("block");
            setSideMenu("none");
        };

        useEffect(() => {
            console.log('hello world');
        }, []);

        return (
            <div>
                <div style={{display: fullMenu}}>
                    <Menu>
                        {data.res.dataSets.map(row => {
                            return (
                                <MenuItem label={row.displayName} onclick={() =>{seeTable}}></MenuItem>
                            )
                        })}
                    </Menu>
                </div>
                
                <aside style={{flexGrow: 0,height: '100%',width: 300,display: sideMenu}}>
                    <Menu>
                        {data.res.dataSets.map(row => {
                            return (
                                <MenuItem label={row.displayName}></MenuItem>
                            )
                        })}
                    </Menu>
                </aside>
            </div>
        )
    }
}