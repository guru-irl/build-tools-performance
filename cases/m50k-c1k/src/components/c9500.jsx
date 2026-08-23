import React from 'react';
const LABEL_9500 = 'component_9500';
export function Component9500({ value = 9500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9500, 'data-value': derived.doubled }, children);
}
export default Component9500;
