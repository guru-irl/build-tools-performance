import React from 'react';
const LABEL_12630 = 'component_12630';
export function Component12630({ value = 12630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12630, 'data-value': derived.doubled }, children);
}
export default Component12630;
