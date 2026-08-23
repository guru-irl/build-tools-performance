import React from 'react';
const LABEL_9096 = 'component_9096';
export function Component9096({ value = 9096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9096, 'data-value': derived.doubled }, children);
}
export default Component9096;
