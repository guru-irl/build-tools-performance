import React from 'react';
const LABEL_12075 = 'component_12075';
export function Component12075({ value = 12075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12075, 'data-value': derived.doubled }, children);
}
export default Component12075;
