import { MemberInterface } from "../model";
import { members } from "./MemberData";

const baseURL ='https://api.github.com/orgs/lemoncode';

// const fetchMembers=():Promise<MemberInterface[]> =>{
//     return Promise.resolve(members);
// }



const fetchMembersAsync =():Promise<MemberInterface[]> =>{
const membersURL ='https://api.github.com/orgs/lemoncode/members';

return fetch(membersURL)
   .then((response)=>(response.json()))
   .then(mapToMembers);
};

const mapToMembers=(githubMembers:any[]):MemberInterface[] =>{
    return githubMembers.map(mapToMember);
}

const mapToMember = (githubMember):MemberInterface[] => {
 return {
     id:githubMember.id,
     name:githubMember.login,
     profile_url: githubMember.avatar_url,
 }
}

export const MemberAPI = {
    // fetchMembers,
    fetchMembersAsync
}