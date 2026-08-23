import React from 'react';
const LABEL_22379 = 'component_22379';
export function Component22379({ value = 22379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22379, 'data-value': derived.doubled }, children);
}
export default Component22379;
