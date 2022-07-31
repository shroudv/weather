import { Skeleton } from '@mui/material'
import React from 'react'

export default function NavigateBarLoader() {
    return (
        <>
            <div className="leftBar">
                <div className="searchSide">
                    <Skeleton variant="text" className='w-100' height={'70px'} />
                    <div>
                        <i className="fa-solid fa-chevron-right" />
                    </div>
                    <div className="resultSide">
                        <div className="results">
                            <div className="result">
                                <h3>Baku</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="currentDay">
                    <h1><Skeleton variant="text" /></h1>
                    <div className="vicon">
                        <Skeleton variant="rectangle" className='b-radius' width={'100px'} height={'100px'} />
                    </div>
                    <div className="content">
                        <h2><Skeleton variant="text" /></h2>
                        <small><Skeleton variant="text" /></small>
                    </div>
                </div>
                <div className="body">
                    <div className="card">
                        <div className="head">
                            <Skeleton variant="rectangle" className='b-radius' width={'40px'} height={'40px'} />
                            <span className="bold"> <Skeleton variant="text" /></span>
                        </div>
                        <div className="content">
                            <span className="bolder"><Skeleton variant="text" /></span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <Skeleton variant="rectangle" className='b-radius' width={'40px'} height={'40px'} />
                            <span> <Skeleton variant="text" /></span>
                        </div>
                        <div className="content">
                            <span className="bolder"><Skeleton variant="text" /></span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <Skeleton variant="rectangle" className='b-radius' width={'40px'} height={'40px'} />
                            <span> <Skeleton variant="text" /></span>
                        </div>
                        <div className="content">
                            <span className="bolder"><Skeleton variant="text" /></span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <Skeleton variant="rectangle" className='b-radius' width={'40px'} height={'40px'} />
                            <span> <Skeleton variant="text" /></span>
                        </div>
                        <div className="content">
                            <span className="bolder"><Skeleton variant="text" /></span>
                        </div>
                    </div>
                    <small className='w-100'><Skeleton variant="text" /> </small>
                </div>
            </div>

        </>
    )
}
