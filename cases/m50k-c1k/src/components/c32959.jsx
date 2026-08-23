import React from 'react';
const LABEL_32959 = 'component_32959';
export function Component32959({ value = 32959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32959, 'data-value': derived.doubled }, children);
}
export default Component32959;
