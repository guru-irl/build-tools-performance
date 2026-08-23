import React from 'react';
const LABEL_17497 = 'component_17497';
export function Component17497({ value = 17497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17497, 'data-value': derived.doubled }, children);
}
export default Component17497;
