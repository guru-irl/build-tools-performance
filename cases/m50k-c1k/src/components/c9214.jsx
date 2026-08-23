import React from 'react';
const LABEL_9214 = 'component_9214';
export function Component9214({ value = 9214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9214, 'data-value': derived.doubled }, children);
}
export default Component9214;
