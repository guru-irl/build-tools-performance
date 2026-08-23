import React from 'react';
const LABEL_8208 = 'component_8208';
export function Component8208({ value = 8208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8208, 'data-value': derived.doubled }, children);
}
export default Component8208;
