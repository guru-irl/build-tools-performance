import React from 'react';
const LABEL_22399 = 'component_22399';
export function Component22399({ value = 22399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22399, 'data-value': derived.doubled }, children);
}
export default Component22399;
