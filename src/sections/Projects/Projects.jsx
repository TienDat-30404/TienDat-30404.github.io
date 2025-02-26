import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section>
      <h1 style = {{ textAlign : 'center' }} className="sectionTitle">Projects</h1>
      <div  className={styles.projectsContainer}>
        <div style={{ display: "flex", gap : 20, flexWrap: "wrap",justifyContent: "center" }}>
          <a href="https://github.com/TienDat-30404/Php-mySql-ajax" target="_blank">
            <img style={{ width: "500px", }} src="https://github-readme-stats.vercel.app/api/pin/?username=TienDat-30404&repo=Php-mySql-ajax" alt="Php-mySql-ajax Repo" />
          </a>

          <a href="https://github.com/TienDat-30404/TienDat-30404.github.io" target="_blank">
            <img style={{ width: "500px" }} src="https://github-readme-stats.vercel.app/api/pin/?username=TienDat-30404&repo=TienDat-30404.github.io" alt="GitHub Pages Repo" />
          </a>

          <a href="https://github.com/TienDat-30404/javaswing" target="_blank">
            <img style={{ width: "500px" }} src="https://github-readme-stats.vercel.app/api/pin/?username=TienDat-30404&repo=javaswing" alt="Javaswing Repo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
