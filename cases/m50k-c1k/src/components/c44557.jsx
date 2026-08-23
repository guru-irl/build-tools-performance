import React from 'react';
const LABEL_44557 = 'component_44557';
export function Component44557({ value = 44557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44557, 'data-value': derived.doubled }, children);
}
export default Component44557;
