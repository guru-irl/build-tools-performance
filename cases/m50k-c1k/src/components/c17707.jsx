import React from 'react';
const LABEL_17707 = 'component_17707';
export function Component17707({ value = 17707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17707, 'data-value': derived.doubled }, children);
}
export default Component17707;
