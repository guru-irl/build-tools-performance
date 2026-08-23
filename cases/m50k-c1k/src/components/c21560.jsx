import React from 'react';
const LABEL_21560 = 'component_21560';
export function Component21560({ value = 21560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21560, 'data-value': derived.doubled }, children);
}
export default Component21560;
