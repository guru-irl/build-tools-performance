import React from 'react';
const LABEL_9991 = 'component_9991';
export function Component9991({ value = 9991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9991, 'data-value': derived.doubled }, children);
}
export default Component9991;
