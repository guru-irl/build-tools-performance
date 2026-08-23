import React from 'react';
const LABEL_33917 = 'component_33917';
export function Component33917({ value = 33917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33917, 'data-value': derived.doubled }, children);
}
export default Component33917;
