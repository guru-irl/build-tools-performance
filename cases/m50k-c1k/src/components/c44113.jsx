import React from 'react';
const LABEL_44113 = 'component_44113';
export function Component44113({ value = 44113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44113, 'data-value': derived.doubled }, children);
}
export default Component44113;
