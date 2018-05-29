import React from 'react'

const BlogFields = ({ input, label, meta: { error, touched } }) => {
  return (
    <section>
      <label>{label}</label>
      {input.name === 'content' ? (
        <textarea rows="20" {...input} />
      ) : (
        <React.Fragment>
          <input {...input} />
          {touched && <div style={{ color: 'red' }}>{error}</div>}
        </React.Fragment>
      )}
    </section>
  )
}

export default BlogFields
