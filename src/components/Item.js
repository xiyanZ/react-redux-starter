import React from "react";
import * as styles from "../style/item.module.scss";
import connect from "@connect";

// let + const
@connect()
export default class Item extends React.PureComponent {
  render() {
    const { title, categories, id, "blog.deleteBlog": deleteBlog } = this.props;

    return (
      <div className={styles["blog-item"]}>
        <h4>{title}</h4>
        <span>{categories}</span>
        <div
          className={styles.delete}
          onClick={async event => {
            event.preventDefault();
            deleteBlog(id);
          }}
        >
          x
        </div>
      </div>
    );
  }
}

// JSX
// export default connect(null, { deleteBlog: null })(Item);
