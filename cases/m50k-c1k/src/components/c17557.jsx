import React from 'react';
const LABEL_17557 = 'component_17557';
export function Component17557({ value = 17557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17557, 'data-value': derived.doubled }, children);
}
export default Component17557;
