import React from 'react';
const LABEL_15159 = 'component_15159';
export function Component15159({ value = 15159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15159, 'data-value': derived.doubled }, children);
}
export default Component15159;
