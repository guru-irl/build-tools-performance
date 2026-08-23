import React from 'react';
const LABEL_9856 = 'component_9856';
export function Component9856({ value = 9856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9856, 'data-value': derived.doubled }, children);
}
export default Component9856;
