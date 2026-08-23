import React from 'react';
const LABEL_39271 = 'component_39271';
export function Component39271({ value = 39271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39271, 'data-value': derived.doubled }, children);
}
export default Component39271;
