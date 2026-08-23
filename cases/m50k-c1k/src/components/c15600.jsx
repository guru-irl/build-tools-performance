import React from 'react';
const LABEL_15600 = 'component_15600';
export function Component15600({ value = 15600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15600, 'data-value': derived.doubled }, children);
}
export default Component15600;
