import React from 'react';
const LABEL_39493 = 'component_39493';
export function Component39493({ value = 39493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39493, 'data-value': derived.doubled }, children);
}
export default Component39493;
