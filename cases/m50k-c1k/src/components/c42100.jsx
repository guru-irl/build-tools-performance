import React from 'react';
const LABEL_42100 = 'component_42100';
export function Component42100({ value = 42100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42100, 'data-value': derived.doubled }, children);
}
export default Component42100;
