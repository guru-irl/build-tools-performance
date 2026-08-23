import React from 'react';
const LABEL_12758 = 'component_12758';
export function Component12758({ value = 12758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12758, 'data-value': derived.doubled }, children);
}
export default Component12758;
