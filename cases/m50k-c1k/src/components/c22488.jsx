import React from 'react';
const LABEL_22488 = 'component_22488';
export function Component22488({ value = 22488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22488, 'data-value': derived.doubled }, children);
}
export default Component22488;
