
import NextAuth from "next-auth/next";
import CredentialsProvidedr from "next-auth/providers/credentials"

export const authOptions ={
    pages:{
        signIn:"/login",
    },
    providers:[
        CredentialsProvidedr({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                try{
                    //console.log({credentials});
                    const user = await login(credentials)
                }catch(error){
                    //console.log("Error = ",error);
                    return null;
                }
            }

        })
    ]
}
const handler = NextAuth(authOptions);

export {handler as GET,handler as POST};
