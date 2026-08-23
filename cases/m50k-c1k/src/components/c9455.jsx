import React from 'react';
const LABEL_9455 = 'component_9455';
export function Component9455({ value = 9455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9455, 'data-value': derived.doubled }, children);
}
export default Component9455;
