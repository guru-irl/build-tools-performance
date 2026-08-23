import React from 'react';
const LABEL_9883 = 'component_9883';
export function Component9883({ value = 9883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9883, 'data-value': derived.doubled }, children);
}
export default Component9883;
