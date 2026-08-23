import React from 'react';
const LABEL_33012 = 'component_33012';
export function Component33012({ value = 33012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33012, 'data-value': derived.doubled }, children);
}
export default Component33012;
