import React from 'react';
const LABEL_33722 = 'component_33722';
export function Component33722({ value = 33722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33722, 'data-value': derived.doubled }, children);
}
export default Component33722;
