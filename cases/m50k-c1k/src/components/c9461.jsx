import React from 'react';
const LABEL_9461 = 'component_9461';
export function Component9461({ value = 9461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9461, 'data-value': derived.doubled }, children);
}
export default Component9461;
