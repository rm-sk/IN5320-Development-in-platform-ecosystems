import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem } from '@dhis2/ui'
import {
	Table,
	TableBody,
	TableCell,
	TableCellHead,
	TableHead,
	TableRow,
	TableRowHead,
} from '@dhis2/ui'

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

// const toggleSubMenu = event => {
//     console.log(event.target.label);
// }
  
export function Datasets(props) {
    const { loading, error, data } = useDataQuery(dataQuery);

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }

    if (data) {
        console.log("API response:",data)
        // const [sideMenu, setSideMenu] = useState("none");
        // const [fullMenu, setFullMenu] = useState("block");

        

       

        // const sideMenu = 'block';
        // const fullMenu = 'none';

        // const seeTable = () => {
        //     setFullMenu("none");
        //     setSideMenu("block");
        // };

        // const hideTable = () => {
        //     setFullMenu("block");
        //     setSideMenu("none");
        // };

        // useEffect(() => {
        //     console.log('hello world');
        // }, []);

        // const returnStatement = []



        // if (props.table == true){
        //     return (
        //         <Menu>
        //                 {data.res.dataSets.map(row => {
        //                     return (
        //                         <MenuItem label={row.displayName} onclick={() =>{props.setTable(true)}}></MenuItem>
        //                     )
        //                 })}
        //             </Menu>
        //     )
        // }

        // else {
            return (
                <div style={{display: 'flex',height: '100%'}}>
                    <aside style={{flexGrow: 0,height: '100%',width: '30vw'}}>
                        <Menu>
                            {data.res.dataSets.map(row => {
                                return (
                                    <MenuItem key={row.id} value={row.id} label={row.displayName} onClick={ event => props.handleClick(event) }/*onclick={() =>{props.handleClick(false)}} onclick={props.handleClick}*/>
                                        <Table>
                                            <TableHead>
                                                <TableRowHead>
                                                    <TableCellHead>Dsiplay Name</TableCellHead>
                                                    <TableCellHead>ID</TableCellHead>
                                                    <TableCellHead>Created</TableCellHead>
                                                </TableRowHead>
                                            </TableHead>
                                            <TableBody>
                                                {data.res.dataSets.map(row => {
                                                    if (row.id == props.clickedID) {
                                                        return (
                                                            <TableRow key={row.id}>
                                                                <TableCell>{row.displayName}</TableCell>
                                                                <TableCell>{row.id}</TableCell>
                                                                <TableCell>{row.created}</TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                })}
                                            </TableBody>
                                        </Table>
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </aside>
                    {/* <section style={{flexGrow: 1,height: '100%'}}>
                        <Table>
                            <TableHead>
                                <TableRowHead>
                                    <TableCellHead>Dsiplay Name</TableCellHead>
                                    <TableCellHead>ID</TableCellHead>
                                    <TableCellHead>Created</TableCellHead>
                                </TableRowHead>
                            </TableHead>
                            <TableBody>
                                {data.res.dataSets.map(row => {
                                    if (row.id == props.clickedID) {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.displayName}</TableCell>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.created}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </section> */}
                </div>
                
            )
        //}

        // return (
        //     <div>
        //         <div style={{display: fullMenu}}>
        //             <Menu>
        //                 {data.res.dataSets.map(row => {
        //                     return (
        //                         <MenuItem label={row.displayName} /*onclick={() =>{seeTable}}*/></MenuItem>
        //                     )
        //                 })}
        //             </Menu>
        //         </div>
                
        //         <aside style={{flexGrow: 0,height: '100%',width: 300,display: sideMenu}}>
        //             <Menu>
        //                 {data.res.dataSets.map(row => {
        //                     return (
        //                         <MenuItem label={row.displayName}></MenuItem>
        //                     )
        //                 })}
        //             </Menu>
        //         </aside>
        //     </div>
        // )
    }
}

// const returnStatement = [];

// if (props.pageNumber > 1){
//     console.log(props.pageNumber);
//     returnStatement.push(<button onClick={props.prev}>Previous page</button>);
// }

// if (props.pageNumber == 1 || props.pageNumber < props.apiData.pager.pageCount){
//     returnStatement.push(<button onClick={props.next}>Next page</button>);
// }