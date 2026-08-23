import React from 'react';
const LABEL_42362 = 'component_42362';
export function Component42362({ value = 42362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42362, 'data-value': derived.doubled }, children);
}
export default Component42362;
