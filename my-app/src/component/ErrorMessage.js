import React from 'react'

const ErrorMessage = ({err}) => {
  return (
    <div class="alert alert-danger" role="alert">
    {err}
    </div>
  )
}

export default ErrorMessage