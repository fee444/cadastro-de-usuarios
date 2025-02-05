import {MyDefaultButton} from './styles'
import PropTypes from 'prop-types'
function DefaultButton ({children,theme, ...props}){
    return(
       <MyDefaultButton {...props} theme={theme}>{children}</MyDefaultButton>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultButton 