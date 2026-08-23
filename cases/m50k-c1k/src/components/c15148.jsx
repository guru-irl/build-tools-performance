import React from 'react';
const LABEL_15148 = 'component_15148';
export function Component15148({ value = 15148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15148, 'data-value': derived.doubled }, children);
}
export default Component15148;
