import React from 'react';
const LABEL_12453 = 'component_12453';
export function Component12453({ value = 12453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12453, 'data-value': derived.doubled }, children);
}
export default Component12453;
