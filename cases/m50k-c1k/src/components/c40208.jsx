import React from 'react';
const LABEL_40208 = 'component_40208';
export function Component40208({ value = 40208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40208, 'data-value': derived.doubled }, children);
}
export default Component40208;
