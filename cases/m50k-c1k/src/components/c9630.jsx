import React from 'react';
const LABEL_9630 = 'component_9630';
export function Component9630({ value = 9630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9630, 'data-value': derived.doubled }, children);
}
export default Component9630;
