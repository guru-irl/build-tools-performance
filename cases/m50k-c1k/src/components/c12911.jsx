import React from 'react';
const LABEL_12911 = 'component_12911';
export function Component12911({ value = 12911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12911, 'data-value': derived.doubled }, children);
}
export default Component12911;
