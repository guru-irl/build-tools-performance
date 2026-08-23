import React from 'react';
const LABEL_22754 = 'component_22754';
export function Component22754({ value = 22754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22754, 'data-value': derived.doubled }, children);
}
export default Component22754;
