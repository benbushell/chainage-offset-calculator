import { useState } from "react"
import Polyline from '../icons/Polyline.svg'
import Delete from '../icons/Delete.svg'
import AttachFile from '../icons/AttachFile.svg'

const FileCard = () => {

    const [open, setOpen] = useState(true)

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <div className="fileCardContainer">
            <div class = 'fileCardTop' onClick={handleOpen}>
            <div className="fileCardLogoContainer">
                <div><img src = {AttachFile}/></div>
                <div>DXF</div>
            </div>
            <div className="fileCardInfo">
                <div className="fileCardTitle">Bridge Alignments.dxf</div>
                <div className="fileCardSubtext">4 Lines</div>
                <div className="fileCardSubtext">234,435kb</div>
            </div>
            <div className="fileCardCarot">^</div>
            </div>
            {open?<div className="fileCardBottom">
                <div className="fileCardLineList">
                   <LineItem/>
                   <LineItem/>
                   <LineItem/>
                   <LineItem/>
                </div>
            </div>:null}
        </div>
    )
}

const LineItem = () => {
    return(
    <div className="lineItemContainer">
        <div className="lineLogo"><img src={Polyline}/></div>
        <div className="lineName">Polyline-1</div>
        <div className="lineDelete"><img src={Delete}/></div>
    </div>
    )
}

export default FileCard