import React from 'react';
const LABEL_44554 = 'component_44554';
export function Component44554({ value = 44554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44554, 'data-value': derived.doubled }, children);
}
export default Component44554;
