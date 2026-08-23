import React from 'react';
const LABEL_15718 = 'component_15718';
export function Component15718({ value = 15718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15718, 'data-value': derived.doubled }, children);
}
export default Component15718;
