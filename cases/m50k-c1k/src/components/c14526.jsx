import React from 'react';
const LABEL_14526 = 'component_14526';
export function Component14526({ value = 14526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14526, 'data-value': derived.doubled }, children);
}
export default Component14526;
