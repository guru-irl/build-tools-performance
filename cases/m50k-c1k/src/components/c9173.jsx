import React from 'react';
const LABEL_9173 = 'component_9173';
export function Component9173({ value = 9173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9173, 'data-value': derived.doubled }, children);
}
export default Component9173;
