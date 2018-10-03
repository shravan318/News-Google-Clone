import React, { Component } from 'react';


class NewsSources extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e8a69d8710cb4359b0b6a2d615dfc96f')
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
      <div>
        {articles.map(article => {
          return (
            <div>
              <p>{article.title}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
export default NewsSources
