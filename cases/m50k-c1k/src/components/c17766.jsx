import React from 'react';
const LABEL_17766 = 'component_17766';
export function Component17766({ value = 17766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17766, 'data-value': derived.doubled }, children);
}
export default Component17766;
