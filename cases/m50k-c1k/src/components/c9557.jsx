import React from 'react';
const LABEL_9557 = 'component_9557';
export function Component9557({ value = 9557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9557, 'data-value': derived.doubled }, children);
}
export default Component9557;
