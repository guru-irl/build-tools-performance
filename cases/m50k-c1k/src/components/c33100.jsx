import React from 'react';
const LABEL_33100 = 'component_33100';
export function Component33100({ value = 33100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33100, 'data-value': derived.doubled }, children);
}
export default Component33100;
