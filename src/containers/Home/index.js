import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon } from 'native-base'
import { Col, Grid, Row} from 'react-native-easy-grid'
import { authLogin } from './actions'
import Auth0 from 'react-native-auth0'
import { AUTH_CONFIG } from '../../config/auth0'

export class Home extends Component {
  render() {
    return (
        <Container>
            <Grid>
                <Row size={2}></Row>
                <Row size={1}>
                    <Content>
                        <Form>
                            <Item regular>
                                <Input placeholder='Username'/>
                            </Item>
                            <Item regular>
                                <Input
                                placeholder='Password'/>
                            </Item>
                        </Form>
                    </Content>
                </Row>
                <Row size={1}>
                    <Content>
                            <Button block>
                                <Text>Login</Text>
                            </Button>
                    </Content>
                </Row>
                <Row size={1}>
                    <Content>
                        <Button primary block onPress={(e) => this.props.onAuthLogin('facebook')} >
                            <Icon name="logo-facebook" />
                            <Text>Login via Facebook</Text>
                        </Button>
                        <Button danger block onPress={(e) => this.props.onAuthLogin('google-oauth2')}>
                            <Icon name="logo-google" />
                            <Text>Login via Google Mail</Text>
                        </Button>
                        <Button block style={{backgroundColor: '#0077B5'}} onPress={(e) => this.props.onAuthLogin('linkedin')}>
                            <Icon name="logo-linkedin" />
                            <Text>Login via LinkedIn</Text>
                        </Button>
                    </Content>
                </Row>
            </Grid>
        </Container>    
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export function mapDispatchToProps(dispatch) {
    return {
        
        onAuthLogin: (connection) => {
            const auth0 = new Auth0({
                domain: AUTH_CONFIG.domain,
                clientId: AUTH_CONFIG.clientId
            })
        
            auth0.webAuth
            .authorize({
                scope: 'openid profile',
                connection: connection,
                audience: 'https://' + AUTH_CONFIG.domain + '/userinfo'
            })
            .then(response => {
                console.log(response)
                if (response.accessToken) {
                    //dispatch(authLogin(connection));
                }
            })
            .catch(error => console.error(error))

            
        },
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)