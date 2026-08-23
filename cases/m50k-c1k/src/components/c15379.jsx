import React from 'react';
const LABEL_15379 = 'component_15379';
export function Component15379({ value = 15379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15379, 'data-value': derived.doubled }, children);
}
export default Component15379;
