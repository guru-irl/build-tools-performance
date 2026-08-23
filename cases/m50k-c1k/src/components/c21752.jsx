import React from 'react';
const LABEL_21752 = 'component_21752';
export function Component21752({ value = 21752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21752, 'data-value': derived.doubled }, children);
}
export default Component21752;
