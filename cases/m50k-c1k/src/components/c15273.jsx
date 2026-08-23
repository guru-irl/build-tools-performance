import React from 'react';
const LABEL_15273 = 'component_15273';
export function Component15273({ value = 15273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15273, 'data-value': derived.doubled }, children);
}
export default Component15273;
