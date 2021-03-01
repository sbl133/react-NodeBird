const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email', // email: req.body.email
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                where: { email }//{email: email}
            });
            if(!user) {
                //done : 첫번쨰인자: server error 두번째: 성공 세번째: client error
                return done(null, false, {reason: '존재하지 않는 이메일입니다!'})
            }
            const result = await bcrypt.compare(password, user.password);
            if(result) {
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
            console.error(error);
            return done(error);
        }
        
    }));
}