import React from 'react';
const LABEL_9562 = 'component_9562';
export function Component9562({ value = 9562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9562, 'data-value': derived.doubled }, children);
}
export default Component9562;
