import React from 'react';
const LABEL_17278 = 'component_17278';
export function Component17278({ value = 17278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17278, 'data-value': derived.doubled }, children);
}
export default Component17278;
