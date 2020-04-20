import { useState } from 'react'
import Devide from '../Devide'
import Link from 'next/link'
import './style.less'

const RecentPost = (props) => {
  // const []
  const [dataSource, setDataSource] = useState(props.dataSource || [])

  return (
    <div className="recent">
      <div className="recent-post">
        <h2 className="title"><a href="">近期的文章，最近总是在玩</a></h2>
        <div className="desc">
          大家好，我叫李靖，来自淘系技术部，是一名前端工程师。在阿里的日子过得太快，转瞬间已在指尖和键盘的 Coding 声中溜走了五年，这五年，我从青涩的小伙转身成为一个女娃娃的爹，也从略带内向的毕业生进化成...
          <a href="">阅读全文 »</a>
        </div>
        <Devide />
        <div className="by">
          Posted by&nbsp;
          <span className="Author"><a href="">Morty&nbsp;</a></span>
          at&nbsp;
          <span className="category"><a href="">随笔&nbsp;</a></span>
          on&nbsp;
          <span className="time">2019-11-30</span>
        </div>
      </div>
      <div className="recent-posts">
        <div className="title">
          <h2>近期文章</h2>
          <div><a href="">博客归档</a></div>
        </div>
        <Devide />
        <ul className="post">
          {dataSource.map((item) => {
            return (
              <li key={item.article_id}>
                <span className="time">{item.article_time}&nbsp;»</span>
                <Link href={`/details?id=${item.article_id}`}>
                  <a>{item.article_title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        {/* <ul className="post">
          <li> <span className="time">2019-12-17&nbsp;»</span> <a href="">浅谈价值表达</a> </li>
          <li> <span className="time">2019-11-30&nbsp;»</span> <a href="">Coding 五年，我在阿里“啃”了块硬骨头</a> </li>
          <li> <span className="time">2019-11-15&nbsp;»</span> <a href="">解密 VS Code 断点调试的原理</a> </li>
          <li> <span className="time">2019-11-07&nbsp;»</span> <a href="">一个刚毕业的计算机相关专业学生，简历上有哪些经历会加分？</a> </li>
          <li> <span className="time">2019-11-01&nbsp;»</span> <a href="">带你开发和调试 VS Code 源码</a> </li>
          <li> <span className="time">2019-10-31&nbsp;»</span> <a href="">Github 的 Go to Definition 功能实现剖析</a> </li>
          <li> <span className="time">2019-10-30&nbsp;»</span> <a href="">Google 的 Code Review 实践经验</a> </li>
          <li> <span className="time">2019-10-29&nbsp;»</span> <a href="">换一种视角理解 awk 命令</a> </li>
          <li> <span className="time">2019-10-28&nbsp;»</span> <a href="">Git 约定式提交规范实践</a> </li>
          <li> <span className="time">2019-10-27&nbsp;»</span> <a href="">本博客的配置和发布</a> </li>
          <li> <span className="time">2019-10-23&nbsp;»</span> <a href="">让 VSCode 在本地 Run 起来</a> </li>
          <li> <span className="time">2019-08-03&nbsp;»</span> <a href="">VSCode 是怎么运行起来的？</a> </li>
        </ul> */}
      </div>
    </div>
  )
}


export default RecentPost