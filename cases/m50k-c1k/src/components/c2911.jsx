import React from 'react';
const LABEL_2911 = 'component_2911';
export function Component2911({ value = 2911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2911, 'data-value': derived.doubled }, children);
}
export default Component2911;
