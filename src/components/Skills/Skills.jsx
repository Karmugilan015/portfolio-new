import styles from './skill.module.css'
import { SkillBoy }from '../../data'
function Skills() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>SKILLS</h1>
          <div className={styles.skills}>
            
        {SkillBoy.map((item,i)=>
        
        <div className="d-flex mx-auto">
          <span className={styles.skill}><i className={item.icon}></i></span>

</div>
        
        )}   
            
          </div></>
    
  );
}

export default Skills;
