import React from 'react';
const LABEL_17765 = 'component_17765';
export function Component17765({ value = 17765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17765, 'data-value': derived.doubled }, children);
}
export default Component17765;
