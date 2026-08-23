import React from 'react';
const LABEL_17232 = 'component_17232';
export function Component17232({ value = 17232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17232, 'data-value': derived.doubled }, children);
}
export default Component17232;
