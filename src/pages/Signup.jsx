export default function Signup() {
  return (
    <div className="form">
      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name" required/>
      <input type="email" placeholder="Email" required/>
      <input type="password" placeholder="Password" required/>

      <button>Signup</button>
    </div>
  )
}
