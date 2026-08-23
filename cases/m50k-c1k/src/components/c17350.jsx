import React from 'react';
const LABEL_17350 = 'component_17350';
export function Component17350({ value = 17350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17350, 'data-value': derived.doubled }, children);
}
export default Component17350;
