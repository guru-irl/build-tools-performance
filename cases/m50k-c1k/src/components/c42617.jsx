import React from 'react';
const LABEL_42617 = 'component_42617';
export function Component42617({ value = 42617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42617, 'data-value': derived.doubled }, children);
}
export default Component42617;
