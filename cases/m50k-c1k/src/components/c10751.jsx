import React from 'react';
const LABEL_10751 = 'component_10751';
export function Component10751({ value = 10751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10751, 'data-value': derived.doubled }, children);
}
export default Component10751;
