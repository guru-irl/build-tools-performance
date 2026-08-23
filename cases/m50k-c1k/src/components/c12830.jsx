import React from 'react';
const LABEL_12830 = 'component_12830';
export function Component12830({ value = 12830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12830, 'data-value': derived.doubled }, children);
}
export default Component12830;
