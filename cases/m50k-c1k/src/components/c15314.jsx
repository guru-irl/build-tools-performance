import React from 'react';
const LABEL_15314 = 'component_15314';
export function Component15314({ value = 15314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15314, 'data-value': derived.doubled }, children);
}
export default Component15314;
