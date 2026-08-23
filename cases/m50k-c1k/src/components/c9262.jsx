import React from 'react';
const LABEL_9262 = 'component_9262';
export function Component9262({ value = 9262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9262, 'data-value': derived.doubled }, children);
}
export default Component9262;
