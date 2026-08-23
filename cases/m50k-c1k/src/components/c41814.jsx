import React from 'react';
const LABEL_41814 = 'component_41814';
export function Component41814({ value = 41814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41814, 'data-value': derived.doubled }, children);
}
export default Component41814;
