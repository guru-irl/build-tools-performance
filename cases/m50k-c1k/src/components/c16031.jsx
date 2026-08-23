import React from 'react';
const LABEL_16031 = 'component_16031';
export function Component16031({ value = 16031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16031, 'data-value': derived.doubled }, children);
}
export default Component16031;
