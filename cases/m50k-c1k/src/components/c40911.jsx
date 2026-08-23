import React from 'react';
const LABEL_40911 = 'component_40911';
export function Component40911({ value = 40911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40911, 'data-value': derived.doubled }, children);
}
export default Component40911;
