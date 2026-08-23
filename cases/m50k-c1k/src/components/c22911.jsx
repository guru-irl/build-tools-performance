import React from 'react';
const LABEL_22911 = 'component_22911';
export function Component22911({ value = 22911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22911, 'data-value': derived.doubled }, children);
}
export default Component22911;
