import React from 'react';
const LABEL_21779 = 'component_21779';
export function Component21779({ value = 21779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21779, 'data-value': derived.doubled }, children);
}
export default Component21779;
