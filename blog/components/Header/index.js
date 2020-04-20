import Link from 'next/link'
import './style.less'
import { useState } from 'react'

const Header = (props) => {
  const [showDropMenu, setShowDropMenu] = useState(false)

  const handleMouseEnter = () => {
    setShowDropMenu(true)
  }

  const handleMouseLeave = () => {
    setShowDropMenu(false)
  }

  return (
    <div className="header">
      <ul className="menu">
        <li className="menu-item">
          <Link href="/">
            <a className="menu-index" >Morty</a>
          </Link>
        </li>
        <li className="menu-item active">
          <span>» 博客</span>
          <a
            className="arrow-expend" 
            onMouseEnter={handleMouseEnter}
            
          >
            ▾
          </a>
          {
            showDropMenu && (
              <ul onMouseLeave={handleMouseLeave} className="drop-menu">
                <li>
                  <Link href="/">
                    <a>博客</a>
                  </Link>
                </li>
                <li>
                  <a href="">归档</a>
                </li>
                <li>
                  <Link>
                    <a href="/categories">分类</a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="">留言</a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="/categories">关于</a>
                  </Link>
                </li>
              </ul>
            )
          }
        </li>

      </ul>
    </div>
  )
}

export default Header