import React from 'react';
const LABEL_17423 = 'component_17423';
export function Component17423({ value = 17423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17423, 'data-value': derived.doubled }, children);
}
export default Component17423;
