import React from 'react';
const LABEL_44031 = 'component_44031';
export function Component44031({ value = 44031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44031, 'data-value': derived.doubled }, children);
}
export default Component44031;
