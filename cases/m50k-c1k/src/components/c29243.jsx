import React from 'react';
const LABEL_29243 = 'component_29243';
export function Component29243({ value = 29243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29243, 'data-value': derived.doubled }, children);
}
export default Component29243;
