import React from 'react';
const LABEL_32758 = 'component_32758';
export function Component32758({ value = 32758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32758, 'data-value': derived.doubled }, children);
}
export default Component32758;
