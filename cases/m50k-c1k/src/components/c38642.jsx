import React from 'react';
const LABEL_38642 = 'component_38642';
export function Component38642({ value = 38642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38642, 'data-value': derived.doubled }, children);
}
export default Component38642;
