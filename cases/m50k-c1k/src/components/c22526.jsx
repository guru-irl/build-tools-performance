import React from 'react';
const LABEL_22526 = 'component_22526';
export function Component22526({ value = 22526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22526, 'data-value': derived.doubled }, children);
}
export default Component22526;
