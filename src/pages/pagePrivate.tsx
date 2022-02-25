import { GetServerSideProps } from "next";
import { isTokenExpired } from "../utils/auth";
import { parseCookies } from "../utils/cookies";

const PagePrivate = () => {
    return (
        <div>
            Página Privada
        </div>
    );
};



export default PagePrivate;



export const getServerSideProps: GetServerSideProps = async(ctx) => {
    const cookies = parseCookies(ctx.req);
   
    if(!cookies.token){
        return{
            redirect:{
                permanent: false,
                destination: '/login'
            }
        }
    }
    //console.log(isTokenExpired(cookies.token))
    return {
        props: {}
    }
}