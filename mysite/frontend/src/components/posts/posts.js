import React from 'react'

function Posts(){
    return (
        <div className="container">
            <h1 className="text-center mt-3">Posts</h1>
            <hr />
            <div className="card shadow-lg bg-white rounded mt-5 mb-5">
                <div className="card-body">
                    <h5 className="card-title d-flex">
                    TITLE
                    <span className="ml-3">by AUTHOR</span> <span className=" ml-auto text-muted">
                    CREATED_AT</span>
                    </h5>
                    <p className="card-text">CONTENT</p>
                </div>
            </div>
        </div>
    )
}

export default Posts
