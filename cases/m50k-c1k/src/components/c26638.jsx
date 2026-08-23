import React from 'react';
const LABEL_26638 = 'component_26638';
export function Component26638({ value = 26638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26638, 'data-value': derived.doubled }, children);
}
export default Component26638;
