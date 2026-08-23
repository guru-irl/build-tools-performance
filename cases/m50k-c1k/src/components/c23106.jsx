import React from 'react';
const LABEL_23106 = 'component_23106';
export function Component23106({ value = 23106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23106, 'data-value': derived.doubled }, children);
}
export default Component23106;
