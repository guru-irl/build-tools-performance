import React from 'react';
const LABEL_38208 = 'component_38208';
export function Component38208({ value = 38208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38208, 'data-value': derived.doubled }, children);
}
export default Component38208;
