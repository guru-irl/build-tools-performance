import React from 'react';
const LABEL_32712 = 'component_32712';
export function Component32712({ value = 32712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32712, 'data-value': derived.doubled }, children);
}
export default Component32712;
