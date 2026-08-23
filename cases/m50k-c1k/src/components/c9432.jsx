import React from 'react';
const LABEL_9432 = 'component_9432';
export function Component9432({ value = 9432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9432, 'data-value': derived.doubled }, children);
}
export default Component9432;
