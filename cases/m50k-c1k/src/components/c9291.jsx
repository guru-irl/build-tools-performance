import React from 'react';
const LABEL_9291 = 'component_9291';
export function Component9291({ value = 9291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9291, 'data-value': derived.doubled }, children);
}
export default Component9291;
