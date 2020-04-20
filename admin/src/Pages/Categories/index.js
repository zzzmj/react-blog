import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Input, Button, Tag, message } from 'antd'
import axios from 'axios'
import Api from '../../config/apiUrl'
import './style.css'

const Categories = () => {
  const [categoryName, setCategoryName] = useState('')
  const [tagName, setTagName] = useState('')
  const [categoryList, setCategoryList] = useState([
    {
      type_id: '1',
      type_name: 'JavaScript'
    },{
      type_id: '2',
      type_name: 'C++'
    },{
      type_id: '3',
      type_name: 'Java'
    },{
      type_id: '4',
      type_name: 'Python'
    },
  ])
  const [tagList, setTagList] = useState([])
  const [loading, setLoading] = useState({
    categoryButton: false,
    tagButton: false
  })
  // const [closable, setClosable] = useState(true)

  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ]

  useEffect(() => {
    // 首次加载请求数据
    getCategories()
    getTags()
  }, [])

  const getCategories = () => {
    // 获取分类列表
    axios.get(Api.getCategories).then(res => {
      const { data } = res
      if (data) {
        setCategoryList(data)
      } else {
        message.error('获取分类数据为空，请检查相关配置')
      }
    }).catch(error => {
      message.error('网络异常, 获取文章分类失败')
      return { error }
    })
  }

  const getTags = () => {
    axios.get(Api.getTags).then(res => {
      const { data } = res
      if (data) {
        setTagList(data)
      } else {
        message.error('获取标签数据为空，请检查相关配置')
      }
    }).catch(error => {
      message.error('网络异常, 获取文章标签失败')
      return { error }
    })
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    
    if (name === 'category') {
      setCategoryName(value)
    } else if (name === 'tag') {
      setTagName(value)
    }
  }

  const handleSubmit = (e) => {
    const { name } = e.target
    if (name === 'category') {
      setLoading(Object.assign(loading, {
        categoryButton: true
      }))

      axios.post(Api.addCategory, {
          typeName: categoryName
      }).then((res)=>{
          setLoading(Object.assign(loading, {
            categoryButton: false
          }))
          const { data } = res
          if (data.success) {
            getCategories()
          } else {
            message.error('插入数据失败，请检查相关配置！')
          }
      }).catch((err) => {
          setLoading(Object.assign(loading, {
            categoryButton: false
          }))
          message.error('网络异常')
          return { err }
      })
    } else if (name === 'tag') {
      setLoading(Object.assign(loading, {
        tagButton: true
      }))

      axios.post(Api.addTag, {
        tagName: tagName
      }).then((res)=>{
        setLoading(Object.assign(loading, {
          tagButton: false
        }))
        const { data } = res
        if (data.success) {
          getTags()
        } else {
          message.error('插入数据失败，请检查相关配置！')
        }
      }).catch((err) => {
        setLoading(Object.assign(loading, {
          tagButton: false
        }))
        message.error('网络异常')
        return { err }
      })
    }
  }

  return (
    <div>
      <Row gutter={24}>
        <Col span={12}>
          <Card className="categories" title="分类列表" bordered={false}>
            {
              categoryList.map((item, index) => {
                return (
                  <Tag closable color={colors[index % colors.length]}>{item.type_name}</Tag>
                )
              })
            }
          </Card>
        </Col>
        <Col span={12}>
          <Card className="tags" title="标签列表" bordered={false}>
            {
              tagList.map((item, index) => {
                return (
                  <Tag closable color={colors[colors.length - index % colors.length]}>{item.tag_name}</Tag>
                )
              })
            }
          </Card>
        </Col>
      </Row>

      <Row>
        <Col style={{
          backgroundColor: '#fff',
          marginTop: 30,
          width: '100%',
          padding: '20px'
        }}>
          <div className="save-category">
            <Input
              name="category"
              onChange={handleChange}
              placeholder="请输入分类名称"
              style={{
                width: 200,
                color: '#999999',
                backgroundColor: '#fafafa',
                marginRight: 20
              }}
            />
            <Button loading={loading.categoryButton} name="category" onClick={handleSubmit} type="primary" >保存分类</Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col style={{
          backgroundColor: '#fff',
          marginTop: 30,
          width: '100%',
          padding: '20px'
        }}>
          <div className="save-category">
            <Input
              name="tag"
              onChange={handleChange}
              placeholder="请输入标签名称"
              style={{
                width: 200,
                color: '#999999',
                backgroundColor: '#fafafa',
                marginRight: 20
              }}
            />
            <Button loading={loading.tagButton} name="tag" onClick={handleSubmit} type="primary" >保存标签</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Categories