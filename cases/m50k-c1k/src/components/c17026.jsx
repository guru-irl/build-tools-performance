import React from 'react';
const LABEL_17026 = 'component_17026';
export function Component17026({ value = 17026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17026, 'data-value': derived.doubled }, children);
}
export default Component17026;
