import React from 'react';
const LABEL_39506 = 'component_39506';
export function Component39506({ value = 39506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39506, 'data-value': derived.doubled }, children);
}
export default Component39506;
