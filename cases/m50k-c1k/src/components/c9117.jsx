import React from 'react';
const LABEL_9117 = 'component_9117';
export function Component9117({ value = 9117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9117, 'data-value': derived.doubled }, children);
}
export default Component9117;
