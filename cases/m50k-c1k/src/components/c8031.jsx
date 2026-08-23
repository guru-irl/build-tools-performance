import React from 'react';
const LABEL_8031 = 'component_8031';
export function Component8031({ value = 8031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8031, 'data-value': derived.doubled }, children);
}
export default Component8031;
