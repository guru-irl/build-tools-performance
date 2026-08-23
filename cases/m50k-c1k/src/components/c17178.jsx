import React from 'react';
const LABEL_17178 = 'component_17178';
export function Component17178({ value = 17178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17178, 'data-value': derived.doubled }, children);
}
export default Component17178;
