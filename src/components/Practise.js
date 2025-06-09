const Comp = (props)=>{
  console.log("props", props);
  return <div>
    <h1>{props.name}</h1>
    <h2>HEading2</h2>
    <h3>Heading3</h3>
  </div>
}

const HigherComp = (Comp)=>{
  return (props)=>{
    return <div>
      <h1>ComponentHeading</h1>
      <Comp name = {props.name}/>
    </div>
  }
}

const CompwithHeading = HigherComp(Comp);

export default CompwithHeading;