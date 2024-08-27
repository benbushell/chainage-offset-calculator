import ProjectCard from "./ProjectCard"

const ProjectPanel = () => {
    return(
        <div className = 'projectPanelContainer'>
            <div className = 'projectsTitle'>Projects</div>
            <div className="projectCardList">
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default ProjectPanel