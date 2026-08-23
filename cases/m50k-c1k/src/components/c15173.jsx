import React from 'react';
const LABEL_15173 = 'component_15173';
export function Component15173({ value = 15173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15173, 'data-value': derived.doubled }, children);
}
export default Component15173;
