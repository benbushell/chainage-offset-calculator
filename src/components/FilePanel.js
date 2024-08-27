import FileCard from "./FileCard"
import ProjectCard from "./ProjectCard"

const FilePanel = () => {
    return(
        <div className = 'filePanelContainer'>
        <div className = 'fileTitle'>Files</div>    
        <div className="fileCardList">
            <FileCard/>
            <FileCard/>
        </div>
    </div>
    )
}

export default FilePanel