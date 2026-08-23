import React from 'react';
const LABEL_17356 = 'component_17356';
export function Component17356({ value = 17356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17356, 'data-value': derived.doubled }, children);
}
export default Component17356;
