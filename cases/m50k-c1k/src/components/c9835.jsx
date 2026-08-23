import React from 'react';
const LABEL_9835 = 'component_9835';
export function Component9835({ value = 9835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9835, 'data-value': derived.doubled }, children);
}
export default Component9835;
