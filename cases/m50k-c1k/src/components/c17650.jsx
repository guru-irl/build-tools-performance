import React from 'react';
const LABEL_17650 = 'component_17650';
export function Component17650({ value = 17650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17650, 'data-value': derived.doubled }, children);
}
export default Component17650;
