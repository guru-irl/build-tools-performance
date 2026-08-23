import React from 'react';
const LABEL_26692 = 'component_26692';
export function Component26692({ value = 26692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26692, 'data-value': derived.doubled }, children);
}
export default Component26692;
