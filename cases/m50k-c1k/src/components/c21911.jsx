import React from 'react';
const LABEL_21911 = 'component_21911';
export function Component21911({ value = 21911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21911, 'data-value': derived.doubled }, children);
}
export default Component21911;
