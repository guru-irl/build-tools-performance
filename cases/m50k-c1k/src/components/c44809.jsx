import React from 'react';
const LABEL_44809 = 'component_44809';
export function Component44809({ value = 44809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44809, 'data-value': derived.doubled }, children);
}
export default Component44809;
