export const TitleLogo = ({ title, caption, className }) => {
  return (<img src='../images/staffinglogo.png' alt="logo" width={200}/>
    // <h1 className={`${className}  title-logo`}>
    //   <span>{caption}</span>
    //   {title}
    // </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm' style={{color:'gray'}}>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
