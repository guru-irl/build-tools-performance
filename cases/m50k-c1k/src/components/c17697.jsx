import React from 'react';
const LABEL_17697 = 'component_17697';
export function Component17697({ value = 17697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17697, 'data-value': derived.doubled }, children);
}
export default Component17697;
