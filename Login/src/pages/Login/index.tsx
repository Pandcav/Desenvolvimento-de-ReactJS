import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import NavBar from '../../components/Navbar'

export default function Login() {



    return (
        <>
            <S.Main>
                
                <S.Imagens selected1 src='src/img/1.jpg' />
                <S.Imagens selected2 src='src/img/2.jpg' />
                <S.Imagens selected3 src='src/img/3.jpg' />
                <S.Imagens selected4 src='src/img/4.jpg' />

                <S.Container>
                    <S.Title>
                        Login
                    </S.Title>
                    <S.Form>
                        <S.InputField>
                            <input type="text" name="username" id='username' placeholder="Enter Your Username" />
                            <S.Underline />
                        </S.InputField>

                        <S.InputField>
                            <input type="password" name="password" id='password' placeholder="Enter Your Password" />
                            <S.Underline />
                        </S.InputField>

                        <S.Button selected > Continuar</S.Button>
                        <S.Button > Cadastrar</S.Button>
                    </S.Form>
                    <S.Footer>
                        <S.Text>Connect With Social Media</S.Text>
                        <S.SocialFields>
                            <S.SocialField Twitter><a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i> Sign in with Twitter</a></S.SocialField>
                            <S.SocialField Facebook><a href="#"><i><FontAwesomeIcon icon={faFacebookF} /></i> Sign in with Facebook</a></S.SocialField>
                            <S.SocialField Google><a href="#"><i><FontAwesomeIcon icon={faGoogle} /></i>Sign in with Google</a></S.SocialField>
                        </S.SocialFields>
                    </S.Footer>
                </S.Container>
            </S.Main>
        </>
    )
}