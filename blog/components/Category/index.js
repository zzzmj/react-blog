import Link from 'next/link'
import Devide from '../Devide'
import './style.less'

const RecentPost = () => {
  return (
    <div className="post-category">
      <h1>文章分类</h1>
      <Devide />
      <ul>
        <li><a href="">JavaScript</a></li>
        <li><a href="">杂物间</a></li>
        <li><a href="">剪贴板</a></li>
        <li><a href="">网络交互</a></li>
        <li><a href="">随笔</a></li>
        <li><a href="">观点和感想</a></li>
        <li><a href="">前端杂烩</a></li>
        <li><a href="">后端杂烩</a></li>
        <li><a href="">Linux</a></li>
        <li><a href="">翻译</a></li>
        <li>
          <Link href="/categories">
            <a>更多分类 »</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default RecentPost