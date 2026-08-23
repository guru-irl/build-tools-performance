import React from 'react';
const LABEL_44043 = 'component_44043';
export function Component44043({ value = 44043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44043, 'data-value': derived.doubled }, children);
}
export default Component44043;
