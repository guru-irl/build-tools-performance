import React from 'react';
const LABEL_12379 = 'component_12379';
export function Component12379({ value = 12379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12379, 'data-value': derived.doubled }, children);
}
export default Component12379;
