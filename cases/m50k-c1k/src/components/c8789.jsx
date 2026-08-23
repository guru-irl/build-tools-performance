import React from 'react';
const LABEL_8789 = 'component_8789';
export function Component8789({ value = 8789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8789, 'data-value': derived.doubled }, children);
}
export default Component8789;
