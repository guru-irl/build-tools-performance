import React from 'react';
const LABEL_34497 = 'component_34497';
export function Component34497({ value = 34497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34497, 'data-value': derived.doubled }, children);
}
export default Component34497;
