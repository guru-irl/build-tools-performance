import React from 'react';
const LABEL_7617 = 'component_7617';
export function Component7617({ value = 7617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7617, 'data-value': derived.doubled }, children);
}
export default Component7617;
