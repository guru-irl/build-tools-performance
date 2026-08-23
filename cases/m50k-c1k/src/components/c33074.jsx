import React from 'react';
const LABEL_33074 = 'component_33074';
export function Component33074({ value = 33074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33074, 'data-value': derived.doubled }, children);
}
export default Component33074;
