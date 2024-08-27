import CMMlogo from '../icons/CMMtech.svg'

const Header = () => {
    return(
        <div className = 'headerContainer'>
            <div className = 'headerLogo'>
                <img src={CMMlogo}/>
                <div>CMM Tech</div>
            </div>
            <div className = 'headerTitle'>Chainage Offset Calculator</div>
            <div className = 'headerSpacer'></div>
        </div>
    )
}

export default Header