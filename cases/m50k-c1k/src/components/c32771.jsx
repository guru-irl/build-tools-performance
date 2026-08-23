import React from 'react';
const LABEL_32771 = 'component_32771';
export function Component32771({ value = 32771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32771, 'data-value': derived.doubled }, children);
}
export default Component32771;
