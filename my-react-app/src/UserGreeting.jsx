function UserGreeting(props) {
  if(props){
    
  return <h2>Welcome {props.username}</h2>; }
  else
  {<h2>Log in</h2>;}
    
}

export default UserGreeting;
