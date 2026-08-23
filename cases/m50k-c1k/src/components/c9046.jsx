import React from 'react';
const LABEL_9046 = 'component_9046';
export function Component9046({ value = 9046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9046, 'data-value': derived.doubled }, children);
}
export default Component9046;
