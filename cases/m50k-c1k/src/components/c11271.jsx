import React from 'react';
const LABEL_11271 = 'component_11271';
export function Component11271({ value = 11271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11271, 'data-value': derived.doubled }, children);
}
export default Component11271;
