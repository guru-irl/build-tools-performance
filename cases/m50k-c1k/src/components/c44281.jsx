import React from 'react';
const LABEL_44281 = 'component_44281';
export function Component44281({ value = 44281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44281, 'data-value': derived.doubled }, children);
}
export default Component44281;
