import React from 'react';
const LABEL_15116 = 'component_15116';
export function Component15116({ value = 15116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15116, 'data-value': derived.doubled }, children);
}
export default Component15116;
