import './style.less'

const ArticleList = (props) => {
  const { dataSource } = props
  return <div className="article-list">
    {
      dataSource.map(item => {
        const { article_title, article_id, article_time } = item
        return (
          <ul key={article_id}>
            <li>
              <a href="">{article_title}</a>
              <span>({article_time})</span>
            </li>
          </ul>
        )
      })
    }
  </div>
}

export default ArticleList