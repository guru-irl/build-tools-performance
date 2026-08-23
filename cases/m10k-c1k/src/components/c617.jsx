import React from 'react';
const LABEL_617 = 'component_617';
export function Component617({ value = 617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_617, 'data-value': derived.doubled }, children);
}
export default Component617;
