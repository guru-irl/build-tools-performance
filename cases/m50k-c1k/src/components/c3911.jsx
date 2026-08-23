import React from 'react';
const LABEL_3911 = 'component_3911';
export function Component3911({ value = 3911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3911, 'data-value': derived.doubled }, children);
}
export default Component3911;
