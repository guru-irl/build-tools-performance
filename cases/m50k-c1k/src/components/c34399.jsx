import React from 'react';
const LABEL_34399 = 'component_34399';
export function Component34399({ value = 34399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34399, 'data-value': derived.doubled }, children);
}
export default Component34399;
