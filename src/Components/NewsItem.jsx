import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let  {title , decreption,imgUrl,newsDet} = this.props
        return (
            <div >
                <div  className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{decreption}...</p>
                        <a href={newsDet}  target='_blank'   className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem