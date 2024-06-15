import React from 'react'

export default function about() {
  return (
    <div>
        <div className="form-floating mb-3">
         <input
           type="email"
          className="form-control"
          id="floatingInputDisabled"
          placeholder="name@example.com"
          disabled
        />
        <label for="floatingInputDisabled">Email address</label>
       </div>
       <div className="form-floating mb-3">
         <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextareaDisabled"
          disabled
        ></textarea>
     </div>
    </div>
  )
}
