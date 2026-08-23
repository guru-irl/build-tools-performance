import React from 'react';
const LABEL_9786 = 'component_9786';
export function Component9786({ value = 9786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9786, 'data-value': derived.doubled }, children);
}
export default Component9786;
