import React from 'react';
const LABEL_9103 = 'component_9103';
export function Component9103({ value = 9103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9103, 'data-value': derived.doubled }, children);
}
export default Component9103;
