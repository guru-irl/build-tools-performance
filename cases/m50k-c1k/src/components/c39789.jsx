import React from 'react';
const LABEL_39789 = 'component_39789';
export function Component39789({ value = 39789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39789, 'data-value': derived.doubled }, children);
}
export default Component39789;
