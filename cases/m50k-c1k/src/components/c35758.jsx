import React from 'react';
const LABEL_35758 = 'component_35758';
export function Component35758({ value = 35758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35758, 'data-value': derived.doubled }, children);
}
export default Component35758;
