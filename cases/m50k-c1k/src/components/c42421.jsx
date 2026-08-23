import React from 'react';
const LABEL_42421 = 'component_42421';
export function Component42421({ value = 42421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42421, 'data-value': derived.doubled }, children);
}
export default Component42421;
