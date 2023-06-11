import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl,author,date, source}=this.props
    return (
      <div>
        <div className="card my-3" >
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
    {source}
    
  </span>
              <img src={!imageUrl?"https://neurosciencenews.com/files/2023/06/neuropharmacology-glioma-neurosinces.jpg":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
              </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
