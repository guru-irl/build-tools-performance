import React from 'react';
const LABEL_17437 = 'component_17437';
export function Component17437({ value = 17437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17437, 'data-value': derived.doubled }, children);
}
export default Component17437;
