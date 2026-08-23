import React from 'react';
const LABEL_17759 = 'component_17759';
export function Component17759({ value = 17759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17759, 'data-value': derived.doubled }, children);
}
export default Component17759;
