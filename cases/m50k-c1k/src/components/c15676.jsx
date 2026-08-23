import React from 'react';
const LABEL_15676 = 'component_15676';
export function Component15676({ value = 15676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15676, 'data-value': derived.doubled }, children);
}
export default Component15676;
