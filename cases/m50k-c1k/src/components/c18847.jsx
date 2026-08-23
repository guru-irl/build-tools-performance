import React from 'react';
const LABEL_18847 = 'component_18847';
export function Component18847({ value = 18847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18847, 'data-value': derived.doubled }, children);
}
export default Component18847;
