import { Row, Col } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Rainbow from '../components/Rainbow'
import RecentPost from '../components/RecentPost'
import Category from '../components/Category'
import Api  from '../config/apiUrl'
import './style.less'


const Home = ({ articleList }) => {
  const [list, setList] = useState(articleList)
  return (
    <div>
      <Rainbow />
      <div className="container">
        <Header />
        <Row>
          <Col span={15}>
            <RecentPost dataSource={list}/>
          </Col>
          <Col offset={2} span={7}>
            <Category />
          </Col>
        </Row>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  return axios(Api.getArticleList).then((res)=>{
    return { articleList: res.data }
  }).catch((err) => {
    console.log(err)
    return { err }
  })
}


export default Home
