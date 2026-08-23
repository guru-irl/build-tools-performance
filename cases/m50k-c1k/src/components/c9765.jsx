import React from 'react';
const LABEL_9765 = 'component_9765';
export function Component9765({ value = 9765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9765, 'data-value': derived.doubled }, children);
}
export default Component9765;
