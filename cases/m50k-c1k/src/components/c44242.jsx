import React from 'react';
const LABEL_44242 = 'component_44242';
export function Component44242({ value = 44242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44242, 'data-value': derived.doubled }, children);
}
export default Component44242;
