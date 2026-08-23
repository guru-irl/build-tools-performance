import React from 'react';
const LABEL_9487 = 'component_9487';
export function Component9487({ value = 9487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9487, 'data-value': derived.doubled }, children);
}
export default Component9487;
