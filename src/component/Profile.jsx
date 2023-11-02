import Avarta from './Avarta.jsx'

export default function Profile({img,name,job,isNew}) {
  return (
    <div className="profile">
      {isNew&&<span className="isNew">NEW!</span>}
      <Avarta img={img}></Avarta>
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
