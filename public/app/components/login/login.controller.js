/**
 * Created by kevinkreuzer on 14.05.17.
 */

export default class LoginController {

    constructor(authService) {
        this.authService = authService
    }

    login(){
        this.authService.login(this.username, this.password)
    }
}
