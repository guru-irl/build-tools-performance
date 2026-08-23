import React from 'react';
const LABEL_10882 = 'component_10882';
export function Component10882({ value = 10882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10882, 'data-value': derived.doubled }, children);
}
export default Component10882;
