import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card">

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }} >

            <span className="badge rounded-pill bg-danger">













              
              {source}
            </span>

          </div>

          <img src={!imageurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyX9RRvqKSHI_s0Qhn2ACeiaKG8I_blw08Q&s" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text" style={{ color: "rgb(159 9 35 / 75%)" }}><small >By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div >

    )
  }
}

export default NewsItem
