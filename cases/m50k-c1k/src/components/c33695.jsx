import React from 'react';
const LABEL_33695 = 'component_33695';
export function Component33695({ value = 33695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33695, 'data-value': derived.doubled }, children);
}
export default Component33695;
