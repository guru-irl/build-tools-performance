import React from 'react';
const LABEL_9057 = 'component_9057';
export function Component9057({ value = 9057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9057, 'data-value': derived.doubled }, children);
}
export default Component9057;
