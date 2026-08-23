import React from 'react';
const LABEL_13422 = 'component_13422';
export function Component13422({ value = 13422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13422, 'data-value': derived.doubled }, children);
}
export default Component13422;
