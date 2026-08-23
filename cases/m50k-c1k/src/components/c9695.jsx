import React from 'react';
const LABEL_9695 = 'component_9695';
export function Component9695({ value = 9695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9695, 'data-value': derived.doubled }, children);
}
export default Component9695;
