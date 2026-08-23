import React from 'react';
const LABEL_25762 = 'component_25762';
export function Component25762({ value = 25762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25762, 'data-value': derived.doubled }, children);
}
export default Component25762;
