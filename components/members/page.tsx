import * as React from 'react';
import { MemberInterface } from '../../model';
import { MemberAPI } from '../../api';
import { MemberHeader } from './memberheader';
import {MemberRow} from './memberRow';

interface State {
  members: MemberInterface[];
}

export class MembersPage extends React.Component<{}, State> {
 
  constructor() {
    super();
    this.state = { members: [] };
  }

  public componentDidMount() {
   MemberAPI.fetchMembersAsync().then((members)=>{
     this.setState({members});
   });
  }

  public render() {
    return (
     <div className="container-fluid">   
      <div className="row">
        <h2> Members Page</h2>
        <div className="container-fluid">
        <table className="table">
          <thead>
            <MemberHeader/>
          </thead>
          <tbody>
            {
              this.state.members.map(
                (member)=>
              <MemberRow key={member.id} member={member}/>                
                                     )
            }          
          </tbody>
          
        </table>
        </div>
      </div>
      </div>
    );
  }
};

// const MemberHeader = () => {
//   return (
//     <tr>
//       <th>Avatar</th>
//       <th>Id</th>
//       <th>Name</th>
//     </tr>
//   );
// }

// const MemberRow = (member: MemberInterface) => {
//   return (
//     <tr key={member.id}>
//       <td>
//         <img src={member.profile_url} className="avatar" />
//       </td>
//       <td>
//         <span>{member.id}</span>
//       </td>
//       <td>
//         <span>{member.name}</span>
//       </td>
//     </tr>
//   )
// }