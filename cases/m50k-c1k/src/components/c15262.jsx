import React from 'react';
const LABEL_15262 = 'component_15262';
export function Component15262({ value = 15262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15262, 'data-value': derived.doubled }, children);
}
export default Component15262;
