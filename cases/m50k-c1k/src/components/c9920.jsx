import React from 'react';
const LABEL_9920 = 'component_9920';
export function Component9920({ value = 9920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9920, 'data-value': derived.doubled }, children);
}
export default Component9920;
