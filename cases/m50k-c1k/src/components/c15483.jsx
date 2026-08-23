import React from 'react';
const LABEL_15483 = 'component_15483';
export function Component15483({ value = 15483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15483, 'data-value': derived.doubled }, children);
}
export default Component15483;
