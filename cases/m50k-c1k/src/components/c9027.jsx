import React from 'react';
const LABEL_9027 = 'component_9027';
export function Component9027({ value = 9027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9027, 'data-value': derived.doubled }, children);
}
export default Component9027;
