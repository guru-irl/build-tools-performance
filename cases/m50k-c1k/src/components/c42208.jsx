import React from 'react';
const LABEL_42208 = 'component_42208';
export function Component42208({ value = 42208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42208, 'data-value': derived.doubled }, children);
}
export default Component42208;
