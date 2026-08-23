import React from 'react';
const LABEL_15124 = 'component_15124';
export function Component15124({ value = 15124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15124, 'data-value': derived.doubled }, children);
}
export default Component15124;
