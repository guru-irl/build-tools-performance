import React from 'react';
const LABEL_35617 = 'component_35617';
export function Component35617({ value = 35617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35617, 'data-value': derived.doubled }, children);
}
export default Component35617;
