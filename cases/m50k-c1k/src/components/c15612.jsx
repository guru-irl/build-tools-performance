import React from 'react';
const LABEL_15612 = 'component_15612';
export function Component15612({ value = 15612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15612, 'data-value': derived.doubled }, children);
}
export default Component15612;
