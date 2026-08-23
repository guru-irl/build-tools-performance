import React from 'react';
const LABEL_9160 = 'component_9160';
export function Component9160({ value = 9160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9160, 'data-value': derived.doubled }, children);
}
export default Component9160;
