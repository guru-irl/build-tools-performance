import React from 'react';
const LABEL_6526 = 'component_6526';
export function Component6526({ value = 6526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6526, 'data-value': derived.doubled }, children);
}
export default Component6526;
