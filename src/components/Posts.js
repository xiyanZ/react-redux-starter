import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

const Posts = ({ data, deletePost }) => {
  return (
    <div>
      {data.length > 0 &&
        data.map(each => {
          const { id } = each
          return (
            <Link
              key={id}
              to={`/posts/${id}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <Item {...each} deletePost={deletePost} />
            </Link>
          )
        })}
    </div>
  )
}

export default Posts
