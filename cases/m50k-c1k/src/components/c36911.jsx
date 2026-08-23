import React from 'react';
const LABEL_36911 = 'component_36911';
export function Component36911({ value = 36911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36911, 'data-value': derived.doubled }, children);
}
export default Component36911;
