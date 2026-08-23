import React from 'react';
const LABEL_9830 = 'component_9830';
export function Component9830({ value = 9830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9830, 'data-value': derived.doubled }, children);
}
export default Component9830;
