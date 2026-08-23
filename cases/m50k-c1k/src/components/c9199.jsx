import React from 'react';
const LABEL_9199 = 'component_9199';
export function Component9199({ value = 9199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9199, 'data-value': derived.doubled }, children);
}
export default Component9199;
