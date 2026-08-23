import React from 'react';
const LABEL_15125 = 'component_15125';
export function Component15125({ value = 15125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15125, 'data-value': derived.doubled }, children);
}
export default Component15125;
