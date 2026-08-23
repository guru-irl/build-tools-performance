import React from 'react';
const LABEL_39238 = 'component_39238';
export function Component39238({ value = 39238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39238, 'data-value': derived.doubled }, children);
}
export default Component39238;
