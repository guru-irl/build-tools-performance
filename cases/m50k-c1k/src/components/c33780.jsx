import React from 'react';
const LABEL_33780 = 'component_33780';
export function Component33780({ value = 33780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33780, 'data-value': derived.doubled }, children);
}
export default Component33780;
