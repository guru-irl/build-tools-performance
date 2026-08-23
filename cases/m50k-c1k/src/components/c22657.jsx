import React from 'react';
const LABEL_22657 = 'component_22657';
export function Component22657({ value = 22657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22657, 'data-value': derived.doubled }, children);
}
export default Component22657;
