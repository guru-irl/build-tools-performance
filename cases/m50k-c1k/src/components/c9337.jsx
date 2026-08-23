import React from 'react';
const LABEL_9337 = 'component_9337';
export function Component9337({ value = 9337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9337, 'data-value': derived.doubled }, children);
}
export default Component9337;
