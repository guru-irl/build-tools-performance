import React from 'react';
const LABEL_9441 = 'component_9441';
export function Component9441({ value = 9441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9441, 'data-value': derived.doubled }, children);
}
export default Component9441;
