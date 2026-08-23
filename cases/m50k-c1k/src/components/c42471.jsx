import React from 'react';
const LABEL_42471 = 'component_42471';
export function Component42471({ value = 42471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42471, 'data-value': derived.doubled }, children);
}
export default Component42471;
