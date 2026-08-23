import React from 'react';
const LABEL_15421 = 'component_15421';
export function Component15421({ value = 15421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15421, 'data-value': derived.doubled }, children);
}
export default Component15421;
