import React from 'react';
const LABEL_44638 = 'component_44638';
export function Component44638({ value = 44638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44638, 'data-value': derived.doubled }, children);
}
export default Component44638;
