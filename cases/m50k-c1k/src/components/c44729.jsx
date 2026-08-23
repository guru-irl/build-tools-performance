import React from 'react';
const LABEL_44729 = 'component_44729';
export function Component44729({ value = 44729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44729, 'data-value': derived.doubled }, children);
}
export default Component44729;
