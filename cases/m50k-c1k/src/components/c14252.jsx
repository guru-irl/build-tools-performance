import React from 'react';
const LABEL_14252 = 'component_14252';
export function Component14252({ value = 14252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14252, 'data-value': derived.doubled }, children);
}
export default Component14252;
