import React from 'react';
const LABEL_5031 = 'component_5031';
export function Component5031({ value = 5031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5031, 'data-value': derived.doubled }, children);
}
export default Component5031;
