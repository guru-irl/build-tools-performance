import React from 'react';
const LABEL_9924 = 'component_9924';
export function Component9924({ value = 9924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9924, 'data-value': derived.doubled }, children);
}
export default Component9924;
