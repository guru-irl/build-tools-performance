import React from 'react';
const LABEL_13264 = 'component_13264';
export function Component13264({ value = 13264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13264, 'data-value': derived.doubled }, children);
}
export default Component13264;
