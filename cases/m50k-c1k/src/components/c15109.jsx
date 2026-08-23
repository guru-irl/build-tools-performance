import React from 'react';
const LABEL_15109 = 'component_15109';
export function Component15109({ value = 15109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15109, 'data-value': derived.doubled }, children);
}
export default Component15109;
