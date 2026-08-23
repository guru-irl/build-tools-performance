import React from 'react';
const LABEL_17438 = 'component_17438';
export function Component17438({ value = 17438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17438, 'data-value': derived.doubled }, children);
}
export default Component17438;
