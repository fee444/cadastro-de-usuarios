import {BackGround} from './styles'
import UserImage from '../../../assets/users.png'



function DefaultBackGround(){
    return(
        <BackGround >
            <img src={UserImage} alt="" />
          </BackGround>
    )
}

export default DefaultBackGround