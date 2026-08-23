import React from 'react';
const LABEL_32187 = 'component_32187';
export function Component32187({ value = 32187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32187, 'data-value': derived.doubled }, children);
}
export default Component32187;
