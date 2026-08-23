import React from 'react';
const LABEL_8379 = 'component_8379';
export function Component8379({ value = 8379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8379, 'data-value': derived.doubled }, children);
}
export default Component8379;
