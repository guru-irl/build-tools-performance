import React from 'react';
const LABEL_34644 = 'component_34644';
export function Component34644({ value = 34644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34644, 'data-value': derived.doubled }, children);
}
export default Component34644;
