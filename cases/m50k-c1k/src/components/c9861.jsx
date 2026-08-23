import React from 'react';
const LABEL_9861 = 'component_9861';
export function Component9861({ value = 9861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9861, 'data-value': derived.doubled }, children);
}
export default Component9861;
