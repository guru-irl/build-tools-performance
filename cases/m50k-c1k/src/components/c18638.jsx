import React from 'react';
const LABEL_18638 = 'component_18638';
export function Component18638({ value = 18638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18638, 'data-value': derived.doubled }, children);
}
export default Component18638;
