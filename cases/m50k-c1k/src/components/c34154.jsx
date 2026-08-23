import React from 'react';
const LABEL_34154 = 'component_34154';
export function Component34154({ value = 34154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34154, 'data-value': derived.doubled }, children);
}
export default Component34154;
