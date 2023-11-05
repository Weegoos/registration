// storage
let name_local = sessionStorage.getItem('name')
let department_local = sessionStorage.getItem('department')
let mail_local = sessionStorage.getItem('mail')
let password_local = sessionStorage.getItem('password')
let role_local = sessionStorage.getItem('role')

// console.log(name_local);

new Vue({
    el:".container",

    data: {
        // login part
        name: "",
        name_fail: "Incorrect Username",
        name_letter: 2,
        // department part
        department: "",
        department_letter: 5,
        department_fail: "Incorrect Department Value",
        // role
        role: "",
        role_letter: 4,
        role_fail: "Incorrect Role Value",
        // mail
        mail:"",
        mail_letter: 19,
        mail_fail: "Incorrect Mail Value",
        // password
        password: "",
        password_letter: 11,
        password_fail: "Incorrect Password Value",
        password_local: password_local,
        // confirm
        password_confirm: "",
        password_confirm_fail: "Passwords don't match",
        // link
        link: "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/project_challenge/main_porject/clarity_page/clarity.html",
        username: [
            "221064@clarity.corp",
            "231064@clarity.corp",
            "241064@clarity.corp",
            "251064@clarity.corp",
            "261064@clarity.corp",
            "271064@clarity.corp",
            "281064@clarity.corp",
            "291064@clarity.corp",
            "301064@clarity.corp",

        ]
    },

    username: {
        
    },

    methods: {
       
        regBtn: function (){
        
        },

        checkLetter: function (){
            // login
            const name_fail = this.$refs.name_fail
            const correct_name_answer = this.$refs.correct_name_answer
            // department
            const department_fail = this.$refs.department_fail
            const correct_department_answer = this.$refs.correct_department_answer
            // role
            const role_fail = this.$refs.role_fail
            const correct_role_answer = this.$refs.correct_role_answer
            // mail
            const mail_fail = this.$refs.mail_fail
            const correct_mail_answer = this.$refs.correct_mail_answer
            // password
            const password_fail = this.$refs.password_fail
            const correct_password_answer = this.$refs.correct_password_answer
            // confirm
            const confirm_fail = this.$refs.confirm_fail
            const correct_confirm_answer = this.$refs.confirm_fail

          try{
            if (this.name.length <= this.name_letter){
                name_fail.setAttribute('style', 'display: flex')
              }else{
                correct_name_answer.setAttribute('style', 'display: flex')
                sessionStorage.setItem('name', this.name)
              }

            if(this.department.length <= this.department_letter){
                department_fail.setAttribute('style', 'display: flex')
            }else {
                correct_department_answer.setAttribute('style', 'display: flex')
                sessionStorage.setItem('department', this.department)
            }
           
            if (this.role.length <= this.role_letter){
                role_fail.setAttribute('style', 'display: flex')
            }else {
                sessionStorage.setItem('role', this.role)

                correct_role_answer.setAttribute('style', 'display: flex')
            }

            if (this.mail.length < this.mail_letter || this.mail.length > this.mail_letter || !this.username.includes(this.mail) ){
                mail_fail.setAttribute('style', 'display: flex')
            }else if (this.mail.includes('clarity.corp') && this.mail.length == this.mail_letter){
                correct_mail_answer.setAttribute('style', 'display: flex')
                sessionStorage.setItem('mail', this.mail)
            }

            if (this.password.length <= this.password_letter){
                password_fail.setAttribute('style', 'display: flex')
            }else {
                correct_password_answer.setAttribute('style', 'display:flex')
                sessionStorage.setItem('password', this.password)
            }

            if (this.password_confirm == this.password ){
                correct_confirm_answer.setAttribute('style', 'display: flex')
                confirm_fail.setAttribute('style', 'display: none')
                // console.log("correct");  
            }else{
                confirm_fail.setAttribute('style', 'display: flex')
                // correct_confirm_answer.setAttribute('style', 'display: none')  
            }

            if ((this.name.length > this.name_letter) &&(this.department.length > this.department_letter) && (this.role.length > this.role_letter) && (this.mail.length > this.mail_letter || this.username.includes(this.mail)) && (this.password.length > this.password_letter) && (this.password_confirm == this.password)){
                window.location = this.link

            }

          }
          catch(err){
            if (err instanceof TypeError){
               
            }

            if (err instanceof SyntaxError){

            }
          }
        
        }
    }

}) 