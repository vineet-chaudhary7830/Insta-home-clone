import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner';
// import PropTypes from 'prop-types'

export default class News extends Component {
   static defaultProps={
    country:"in",
    pageSize:8,
    category:"general",
   }
  //  static PropTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //  }
    constructor(){
        super();
        this.state={
            articles :[],
            loading:false,
            page:1,
        }
    }

   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f51baf602be49259345220d24461196&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,
          totalResult:parsedData.totalResults,
          loading:false,})
    }
    handlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f51baf602be49259345220d24461196&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1,
            loading:false,
        }) 
    }
     handleNextClick=async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResult/10)){

        }else{
            console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f51baf602be49259345220d24461196&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
            loading:false,
        })
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'30px 0px'}}>NewsMonkey :- Top HeadLines</h1>
        { this.state.loading&&<Spinner />}
        <div className='row'>
        {!this.state.loading&&this.state.articles.map((element)=>{
           return <div className='col-md-4' key={element.url}>    
              <NewsItem  title={element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg"} newsUrl={element.url}/>
            </div>
        })}
        </div>
       <div className='container d-flex justify-content-between'>
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/10)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}
