export class CustomeValidator{

    static passwordValidator(password){
        if(password.pristine){
            return null;
        }
        console.log('checked')
        const pass_regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

        if(pass_regex.test(password.value)) return null;

        return {invalid : true};
    }
}