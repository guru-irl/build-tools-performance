import React from 'react';
const LABEL_9634 = 'component_9634';
export function Component9634({ value = 9634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9634, 'data-value': derived.doubled }, children);
}
export default Component9634;
