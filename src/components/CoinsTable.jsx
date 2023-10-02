import React from 'react'
import { Table } from 'react-bootstrap'


const CoinsTable = ({data}) => {
    return (
        <>
            <div>CoinsTable</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj) => (
                        <tr key={obj.id}>
                            <td>{obj.rank}</td>
                            <td>
                                <img 
                                    src={obj.icon}
                                    width={20}
                                    style={{marginRight: 10}} 
                                    alt="Coint" 
                                />
                                {obj.name}
                            </td>
                            <td>{obj.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
        
    )
}

export default CoinsTable