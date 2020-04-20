import React, { useState, useRef, useEffect } from 'react'
import { Button, Input, Row, Col, Select, message } from 'antd'
import marked from 'marked'
import axios from 'axios'
import Api from '../../config/apiUrl'
import { Editor } from '@toast-ui/react-editor';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import codeSyntaxHightlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const { Option } = Select

const AddArticle = () => {
  const editorEl = useRef(null)
  const [articleTitle, setArticleTitle] = useState('')
  const [html, setHtml] = useState('')
  const [categoryList, setCategoryList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [tagList, setTagList] = useState([])
  const [selectedTag, setSelectedTag] = useState([])
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  useEffect(() => {
    // 获取分类接口
    axios.get(Api.getCategories).then((res)=>{
      const { data } = res
      setCategoryList(data)
    }).catch((err) => {
      message.error('网络异常，获取文章分类失败')
      return { err }
    })

    // 获取标签接口
    axios.get(Api.getTags).then((res)=>{
      const { data } = res
      setTagList(data)
    }).catch((err) => {
      message.error('网络异常，获取文章分类失败')
      return { err }
    })
  }, [])

  const handleTextAreaChange = (e) => {
    const value = e.target.value
    setHtml(marked(value))
  }

  const onChange = (value) => {
    setSelectedCategory(value)
  }

  const hanldeTitleChange = (e) => {
    setArticleTitle(e.target.value)
  }

  const handleTagChange = (value) => {
    setSelectedTag(value)
  }

  const handleClick = () => {
    // html 内容
    const author = 'zmj'
    const articleTime = new Date().toLocaleString()
    const articleContent = editorEl.current.getInstance().getHtml()

    console.log('输出内容', articleTime, articleContent, selectedCategory, selectedTag)
    axios.get(Api.addArticle, {
      articleTitle,
      articleContent,
      articleTime

    }).then((res)=>{
      const { data } = res
      setCategoryList(data)
    }).catch((err) => {
      message.error('网络异常，获取文章分类失败')
      return { err }
    })
    console.log(html)
  }

  return (
    <div className="add-article">
      <Row gutter={32} style={{marginBottom: '20px'}}>
        <Col span={12}>
          <Input onChange={hanldeTitleChange} placeholder="文章标题" />
        </Col>
        <Col span={12}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="文章分类"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {
              categoryList.map(item => {
                return (
                <Option value={item.type_id}>{item.type_name}</Option>
                )
              })
            }
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>,
        </Col>
        <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="文章标签"
          onChange={handleTagChange}
        >
          {
            tagList.map(item => {
              const { tag_id, tag_name } = item
            return <Option key={tag_id}>{ tag_name }</Option>
            })
          }
        </Select>,
        </Col>
      </Row>
      {/* <Row gutter={32}>
        <Col span={12}>
          <TextArea onChange={handleTextAreaChange}/>
        </Col>
        <Col span={12}>
          <div 
            dangerouslySetInnerHTML={{__html: html}}
          >

          </div>

        </Col>
      </Row> */}
      <Editor
        className="editor"
        ref={editorEl}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        // useCommandShortcut={true}
        plugins={[
          [codeSyntaxHightlight, {hljs}]
        ]}
      />
      <div style={{
        marginTop: '20px',
      }}>
        <Button onClick={handleClick} type="primary">发布文章</Button>
      </div>
    </div>
  )
}

export default AddArticle