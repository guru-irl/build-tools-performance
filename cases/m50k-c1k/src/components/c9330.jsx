import React from 'react';
const LABEL_9330 = 'component_9330';
export function Component9330({ value = 9330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9330, 'data-value': derived.doubled }, children);
}
export default Component9330;
