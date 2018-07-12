import React from 'react'
import * as styles from '../style/item.module.scss'
export default class Item extends React.PureComponent {
  render() {
    const { title, categories, id, deletePost } = this.props
    return (
      <div className={styles['blog-item']}>
        <h4>{title}</h4>
        <span>{categories}</span>
        <div
          className={styles.delete}
          onClick={async event => {
            event.preventDefault()
            deletePost(id)
          }}
        >
          x
        </div>
      </div>
    )
  }
}

// JSX
// export default connect(null, { deleteBlog: null })(Item);
