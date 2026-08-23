import React from 'react';
const LABEL_5529 = 'component_5529';
export function Component5529({ value = 5529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5529, 'data-value': derived.doubled }, children);
}
export default Component5529;
