import React from 'react';
const LABEL_35116 = 'component_35116';
export function Component35116({ value = 35116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35116, 'data-value': derived.doubled }, children);
}
export default Component35116;
