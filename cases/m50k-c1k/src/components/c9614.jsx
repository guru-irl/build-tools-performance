import React from 'react';
const LABEL_9614 = 'component_9614';
export function Component9614({ value = 9614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9614, 'data-value': derived.doubled }, children);
}
export default Component9614;
