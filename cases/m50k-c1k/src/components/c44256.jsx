import React from 'react';
const LABEL_44256 = 'component_44256';
export function Component44256({ value = 44256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44256, 'data-value': derived.doubled }, children);
}
export default Component44256;
