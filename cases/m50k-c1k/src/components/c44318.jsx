import React from 'react';
const LABEL_44318 = 'component_44318';
export function Component44318({ value = 44318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44318, 'data-value': derived.doubled }, children);
}
export default Component44318;
