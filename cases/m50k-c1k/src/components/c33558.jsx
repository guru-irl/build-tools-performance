import React from 'react';
const LABEL_33558 = 'component_33558';
export function Component33558({ value = 33558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33558, 'data-value': derived.doubled }, children);
}
export default Component33558;
