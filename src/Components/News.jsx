import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page:1
        }
    }

     
    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6506b05438814211a96e534af1f59dc7`;
        this.setState({loading:true});
        let data = await fetch(url)
        this.props.setProgress(30)
        let mydata = await data.json();
        console.log(mydata);
        this.setState({ articles: mydata.articles,
            loading:false
         })
         this.props.setProgress(100)
    }

    handNex = async ()=>{
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6506b05438814211a96e534af1f59dc7&page=${this.state.page+1}`;
        this.setState({loading:true});
        let data = await fetch(url)
        this.props.setProgress(30)
        let mydata = await data.json();
        console.log(mydata);
        
        this.setState(
            {
                page:this.state.page+1,
                articles: mydata.articles,
                loading:false

            }
        )
        this.props.setProgress(100)

        

    }
      
    handPre = async ()=>{
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6506b05438814211a96e534af1f59dc7&page=${this.state.page-1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30)
        let mydata = await data.json();
        this.props.setProgress(100)
        // this.setState.loading({loading:false});
        
        this.setState(
            {
                page:this.state.page-1,
                articles: mydata.articles,
                loading:false
            }
        )

        

    }

    render() {
        return (
            <div className='container my-3'>
               
                <h1 className='text-center my-3 ' style={{color: "#9D44C0"}}>Top-News</h1>
             {this.state.loading && <Spinner/>}
                <div className="row">
                    {!(this.state.loading)&&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0, 20) : ""} decreption={element.description ? element.description.slice(0, 60) : ""} imgUrl={element.urlToImage?element.urlToImage:""} newsDet={element.url?element.url:""} />
                        </div>
                    })}
                </div>
                <div className="d-flex bd-highlight mb-3">
  <button disabled={this.state.page<=1} className="btn btn-dark p-2 bd-highlight my-2" onClick={this.handPre}>&#8592; Privious</button>
  <button className="btn btn-dark ml-auto p-2 bd-highlight my-2" onClick={this.handNex}>Next  &#8594;</button>
</div>
            </div>
        )
    }
}


export default News
