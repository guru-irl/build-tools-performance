import React from 'react';
const LABEL_29911 = 'component_29911';
export function Component29911({ value = 29911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29911, 'data-value': derived.doubled }, children);
}
export default Component29911;
