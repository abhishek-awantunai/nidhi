import React, { Fragment } from 'react'

const List = ({imagePosts}) => {
    return (
        <Fragment>
            { imagePosts.map(data => <div className="col-sm-4" key={data.id}><img src={data.url} /></div>) }
        </Fragment>
    )
}

export default List;