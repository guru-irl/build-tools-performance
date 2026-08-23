import React from 'react';
const LABEL_10487 = 'component_10487';
export function Component10487({ value = 10487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10487, 'data-value': derived.doubled }, children);
}
export default Component10487;
