import React from 'react';
const LABEL_15300 = 'component_15300';
export function Component15300({ value = 15300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15300, 'data-value': derived.doubled }, children);
}
export default Component15300;
