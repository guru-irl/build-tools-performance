import React from 'react';
const LABEL_42031 = 'component_42031';
export function Component42031({ value = 42031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42031, 'data-value': derived.doubled }, children);
}
export default Component42031;
