import React from 'react';
const LABEL_14076 = 'component_14076';
export function Component14076({ value = 14076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14076, 'data-value': derived.doubled }, children);
}
export default Component14076;
