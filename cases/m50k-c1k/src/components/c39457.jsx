import React from 'react';
const LABEL_39457 = 'component_39457';
export function Component39457({ value = 39457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39457, 'data-value': derived.doubled }, children);
}
export default Component39457;
