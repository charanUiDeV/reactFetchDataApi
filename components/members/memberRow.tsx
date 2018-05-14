import * as React from 'react';
import { MemberInterface } from '../../model';

interface Props {
  member:MemberInterface;
}

export const MemberRow: React.StatelessComponent<Props> = ({member}) => {
  return (
    <tr>
      <td>
        <img src={member.profile_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.name}</span>
      </td>
    </tr>
  );
};