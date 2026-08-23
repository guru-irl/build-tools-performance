import React from 'react';
const LABEL_28455 = 'component_28455';
export function Component28455({ value = 28455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28455, 'data-value': derived.doubled }, children);
}
export default Component28455;
