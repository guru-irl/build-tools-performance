import React from 'react';
const LABEL_12780 = 'component_12780';
export function Component12780({ value = 12780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12780, 'data-value': derived.doubled }, children);
}
export default Component12780;
