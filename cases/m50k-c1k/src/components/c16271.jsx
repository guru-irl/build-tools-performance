import React from 'react';
const LABEL_16271 = 'component_16271';
export function Component16271({ value = 16271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16271, 'data-value': derived.doubled }, children);
}
export default Component16271;
