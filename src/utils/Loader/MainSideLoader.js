import React from 'react'
import { Skeleton } from '@mui/material'


export default function MainSideLoader() {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="wrapper">
                <h1><Skeleton width={'180px'} variant="text" /></h1>
            <div className="days">
                {
                    arr.map((ar,key) => {
                        return (
                            <div key={key} className="card">
                                <div className="icon">
                                    <Skeleton variant="rectangle" className='b-radius' width={'60px'} height={'60px'} />
                                </div>
                                <div className="content">
                                    <span className="bolder w-100"><Skeleton width={'180px'} variant="text" /></span>
                                    <span className="dg"><Skeleton width={'60px'} variant="text" /></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
