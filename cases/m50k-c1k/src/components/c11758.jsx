import React from 'react';
const LABEL_11758 = 'component_11758';
export function Component11758({ value = 11758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11758, 'data-value': derived.doubled }, children);
}
export default Component11758;
