import React from 'react';
const LABEL_9880 = 'component_9880';
export function Component9880({ value = 9880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9880, 'data-value': derived.doubled }, children);
}
export default Component9880;
