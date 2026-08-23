import React from 'react';
const LABEL_789 = 'component_789';
export function Component789({ value = 789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_789, 'data-value': derived.doubled }, children);
}
export default Component789;
