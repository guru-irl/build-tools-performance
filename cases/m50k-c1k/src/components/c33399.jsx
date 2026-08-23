import React from 'react';
const LABEL_33399 = 'component_33399';
export function Component33399({ value = 33399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33399, 'data-value': derived.doubled }, children);
}
export default Component33399;
