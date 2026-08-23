import React from 'react';
const LABEL_35488 = 'component_35488';
export function Component35488({ value = 35488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35488, 'data-value': derived.doubled }, children);
}
export default Component35488;
