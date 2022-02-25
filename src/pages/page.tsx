// @flow 
import { GetServerSideProps } from 'next';
import * as React from 'react';
type Props = {
    name: string;

};
const Page = ({name} : Props) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};


export default Page;

export const getServerSideProps: GetServerSideProps= async(ctx)=>{
    //bd
    //api externa
    return{
        props:{
            name: 'Lívia'
        }
    }
}