import React from 'react';
const LABEL_9004 = 'component_9004';
export function Component9004({ value = 9004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9004, 'data-value': derived.doubled }, children);
}
export default Component9004;
