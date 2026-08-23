import React from 'react';
const LABEL_17931 = 'component_17931';
export function Component17931({ value = 17931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17931, 'data-value': derived.doubled }, children);
}
export default Component17931;
