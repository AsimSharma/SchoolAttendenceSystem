import React , { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirecToLogin = () => {

  let navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  })

  return (

    <div>Redirec To Login</div>
  )
}

export default RedirecToLogin
