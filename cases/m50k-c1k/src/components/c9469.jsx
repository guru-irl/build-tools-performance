import React from 'react';
const LABEL_9469 = 'component_9469';
export function Component9469({ value = 9469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9469, 'data-value': derived.doubled }, children);
}
export default Component9469;
