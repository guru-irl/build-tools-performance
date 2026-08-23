import React from 'react';
const LABEL_9203 = 'component_9203';
export function Component9203({ value = 9203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9203, 'data-value': derived.doubled }, children);
}
export default Component9203;
