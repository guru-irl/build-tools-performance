import React from 'react';
const LABEL_9151 = 'component_9151';
export function Component9151({ value = 9151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9151, 'data-value': derived.doubled }, children);
}
export default Component9151;
