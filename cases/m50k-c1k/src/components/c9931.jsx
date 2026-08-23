import React from 'react';
const LABEL_9931 = 'component_9931';
export function Component9931({ value = 9931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9931, 'data-value': derived.doubled }, children);
}
export default Component9931;
