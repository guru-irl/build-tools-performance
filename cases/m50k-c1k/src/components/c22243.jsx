import React from 'react';
const LABEL_22243 = 'component_22243';
export function Component22243({ value = 22243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22243, 'data-value': derived.doubled }, children);
}
export default Component22243;
