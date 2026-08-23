import React from 'react';
const LABEL_13266 = 'component_13266';
export function Component13266({ value = 13266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13266, 'data-value': derived.doubled }, children);
}
export default Component13266;
