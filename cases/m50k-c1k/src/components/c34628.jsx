import React from 'react';
const LABEL_34628 = 'component_34628';
export function Component34628({ value = 34628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34628, 'data-value': derived.doubled }, children);
}
export default Component34628;
