import React from 'react';
const LABEL_9734 = 'component_9734';
export function Component9734({ value = 9734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9734, 'data-value': derived.doubled }, children);
}
export default Component9734;
