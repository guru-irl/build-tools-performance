import React from 'react';
const LABEL_36116 = 'component_36116';
export function Component36116({ value = 36116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36116, 'data-value': derived.doubled }, children);
}
export default Component36116;
