import './App.css';
import Profile from '../component/Profile.jsx'

function App() {
  const employee=[
    {
      name:'James Kim',
      img:'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg',
      job:'프론트엔드 개발자',
      isNew:true
    },
    {
      img:'https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      name:'Smith Park', 
      job:'백엔드 개발자'
    },
    {
      img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      name:'John Park',
      job:'DB 개발자'
    }
  ]
  return (
    <>
      {employee.map(v=>(<Profile name={v.name} img={v.img} job={v.job} isNew={v.isNew?v.isNew:''} />))}
    </>
  );
}

export default App;
