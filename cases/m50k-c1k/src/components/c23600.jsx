import React from 'react';
const LABEL_23600 = 'component_23600';
export function Component23600({ value = 23600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23600, 'data-value': derived.doubled }, children);
}
export default Component23600;
