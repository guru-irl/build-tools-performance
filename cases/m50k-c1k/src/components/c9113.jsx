import React from 'react';
const LABEL_9113 = 'component_9113';
export function Component9113({ value = 9113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9113, 'data-value': derived.doubled }, children);
}
export default Component9113;
