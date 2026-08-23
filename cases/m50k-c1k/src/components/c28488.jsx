import React from 'react';
const LABEL_28488 = 'component_28488';
export function Component28488({ value = 28488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28488, 'data-value': derived.doubled }, children);
}
export default Component28488;
