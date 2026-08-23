import React from 'react';
const LABEL_39539 = 'component_39539';
export function Component39539({ value = 39539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39539, 'data-value': derived.doubled }, children);
}
export default Component39539;
