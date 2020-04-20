import Rainbow from '../../components/Rainbow'
import marked from 'marked'
import hljs from 'highlight.js';
import Link from 'next/link'
import 'highlight.js/styles/github.css';
import Api  from '../../config/apiUrl'
import axios from 'axios'
import './style.less'

const Details = (props) => {
  let input='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

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
      return hljs.highlightAuto(code).value;
    }
  }); 

  let html = marked(input) 
  return (
    <div>
      <Rainbow />
      <div className="container">
        <ul className="details-menu">
          <li className="menu-item">
            <Link href="/">
              <a>博客</a>
            </Link>
          </li>
          <li className="menu-item">
            <span>&nbsp;»&nbsp;</span>
            <a href="">随笔</a>
          </li>
        </ul>
        <div className="post-content">
          <h1 className="post-title">Coding 五年，我在阿里“啃”了块硬骨头</h1>
          <div className="post-info">
            <span className="author">作者：<a href="">Morty</a></span>
            <span className="time"> 2019-11-30 13:25:00</span>
            <span className="category">分类：<a href="">随笔</a></span>
            <span>标签：<a href="">alibaba</a></span>
            <span>评论数：<a href=""></a></span>
            <span>热度：1567</span>
          </div>
          <div 
            dangerouslySetInnerHTML={{__html: html}}
          >

          </div>
          
        </div>
      </div>
    </div>
  )
}

Details.getInitialProps = async() => {
  return axios(Api.getArticleById).then((res)=>{
    return { articleList: res.data }
  }).catch((err) => {
    console.log(err)
    return { err }
  })
}

export default Details