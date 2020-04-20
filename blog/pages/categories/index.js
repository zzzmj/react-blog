import Header from '../../components/Header'
import Rainbow from '../../components/Rainbow'
import ArticleList from '../../components/ArticleList'
import Api  from '../../config/apiUrl'
import axios from 'axios'
import './style.less'
import { useState } from 'react'


const Categories = ({ categoryList, articleList }) => {
  const [articles, setArticles] = useState(articleList)

  const getArticleByCategory = (typeId) => {
    axios(Api.getArticleByCategory, {
      params: {
        type: typeId
      }
    }).then((res) => {
      console.log('更新', res.data)
      setArticles(res.data)
    }).catch((err) => {
      console.log(err)
      return { err }
    })
  }

  const handleClick = (e, id) => {
    e.preventDefault()
    console.log('click id', id)
    getArticleByCategory(id)
  }

  return (
    <div>
      <Rainbow />
      <div className="container">
        <Header />
        <div className="categories">
          <span>类别：</span>
          <div className="list">
            {
              categoryList.map(item => {
                const { type_name, type_id } = item
                return (
                  <a onClick={(e) => handleClick(e, type_id)}>{type_name}</a>
                )
              })
            }
          </div>
        </div>
        <ArticleList dataSource={articles} />
      </div>
    </div>
  )
}

Categories.getInitialProps = async() => {
  const categoryList = await axios(Api.getCategories).then((res)=>{
    return res.data
  }).catch((err) => {
    console.log(err)
    return { err }
  })

  // 默认选第一个分类
  const typeId = categoryList[0].type_id
  const articleList = await axios(Api.getArticleByCategory, {
    params: {
      type: typeId
    }
  }).then((res)=>{
    return res.data
  }).catch((err) => {
    console.log(err)
    return { err }
  })
  return {
    categoryList,
    articleList
  }
}

export default Categories