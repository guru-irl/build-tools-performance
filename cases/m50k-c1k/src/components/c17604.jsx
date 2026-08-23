import React from 'react';
const LABEL_17604 = 'component_17604';
export function Component17604({ value = 17604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17604, 'data-value': derived.doubled }, children);
}
export default Component17604;
