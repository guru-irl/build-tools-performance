import React from 'react';
const LABEL_33600 = 'component_33600';
export function Component33600({ value = 33600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33600, 'data-value': derived.doubled }, children);
}
export default Component33600;
