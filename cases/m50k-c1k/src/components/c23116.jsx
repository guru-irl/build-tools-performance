import React from 'react';
const LABEL_23116 = 'component_23116';
export function Component23116({ value = 23116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23116, 'data-value': derived.doubled }, children);
}
export default Component23116;
