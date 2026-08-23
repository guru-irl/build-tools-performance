import React from 'react';
const LABEL_32526 = 'component_32526';
export function Component32526({ value = 32526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32526, 'data-value': derived.doubled }, children);
}
export default Component32526;
