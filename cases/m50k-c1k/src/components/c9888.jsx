import React from 'react';
const LABEL_9888 = 'component_9888';
export function Component9888({ value = 9888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9888, 'data-value': derived.doubled }, children);
}
export default Component9888;
