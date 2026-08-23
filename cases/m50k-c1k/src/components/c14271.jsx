import React from 'react';
const LABEL_14271 = 'component_14271';
export function Component14271({ value = 14271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14271, 'data-value': derived.doubled }, children);
}
export default Component14271;
