import React from 'react';
const LABEL_9812 = 'component_9812';
export function Component9812({ value = 9812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9812, 'data-value': derived.doubled }, children);
}
export default Component9812;
