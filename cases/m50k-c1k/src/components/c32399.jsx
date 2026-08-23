import React from 'react';
const LABEL_32399 = 'component_32399';
export function Component32399({ value = 32399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32399, 'data-value': derived.doubled }, children);
}
export default Component32399;
