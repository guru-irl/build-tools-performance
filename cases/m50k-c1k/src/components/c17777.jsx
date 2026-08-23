import React from 'react';
const LABEL_17777 = 'component_17777';
export function Component17777({ value = 17777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17777, 'data-value': derived.doubled }, children);
}
export default Component17777;
