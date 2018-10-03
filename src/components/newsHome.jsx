import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'


class NewsHome extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e8a69d8710cb4359b0b6a2d615dfc96f')
    .then(response => response.json())
    .then(response => {
      console.log('response', response)
      this.setState({
        articles: response.articles
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const { articles } = this.state
    console.log("articles", articles)
    return (
      <div className="container">
        <h1>Today's Headlines </h1>
        {articles.map(article => {
          return (
            <div className="e-article-wrapper">
              <a href={article.url} target="_blank">
              <div className="o-spacebetween-wrapper">
                <div>
                    <p className="e-article-title">{article.title}</p>
                    <div className="o-flexstart-wrapper u-authorandsource-info">
                    <div>

                    <p className="u-margin-top-10">Author : {article.author ? <span>{article.author}</span> : <span>Not Available</span>}</p>
                    </div>
                    <div>
                    <FontAwesome name="caret-down" />
                  </div>
                  <div>
                    
                  </div>

                    <p className="u-margin-top-10">source : {article.source.name ? <span>{article.source.name}</span> : <span>Not Available</span>}</p>
                  </div>
                    </div>
              <div className="heading-img-container">
                <img src={article.urlToImage} className="heading-img" />
              </div>
                </div>
            </a>
            </div>
          )
        })}
      </div>
    );
  }
}
export default NewsHome
