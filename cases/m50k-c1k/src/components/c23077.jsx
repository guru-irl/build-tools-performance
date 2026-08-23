import React from 'react';
const LABEL_23077 = 'component_23077';
export function Component23077({ value = 23077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23077, 'data-value': derived.doubled }, children);
}
export default Component23077;
