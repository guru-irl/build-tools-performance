import React from 'react';
const LABEL_37031 = 'component_37031';
export function Component37031({ value = 37031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37031, 'data-value': derived.doubled }, children);
}
export default Component37031;
