import React from 'react';
const LABEL_23593 = 'component_23593';
export function Component23593({ value = 23593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23593, 'data-value': derived.doubled }, children);
}
export default Component23593;
