import React from 'react';
const LABEL_45513 = 'component_45513';
export function Component45513({ value = 45513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45513, 'data-value': derived.doubled }, children);
}
export default Component45513;
