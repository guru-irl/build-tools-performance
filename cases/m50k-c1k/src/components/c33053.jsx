import React from 'react';
const LABEL_33053 = 'component_33053';
export function Component33053({ value = 33053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33053, 'data-value': derived.doubled }, children);
}
export default Component33053;
