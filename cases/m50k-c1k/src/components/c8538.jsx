import React from 'react';
const LABEL_8538 = 'component_8538';
export function Component8538({ value = 8538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8538, 'data-value': derived.doubled }, children);
}
export default Component8538;
