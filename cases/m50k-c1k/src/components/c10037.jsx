import React from 'react';
const LABEL_10037 = 'component_10037';
export function Component10037({ value = 10037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10037, 'data-value': derived.doubled }, children);
}
export default Component10037;
