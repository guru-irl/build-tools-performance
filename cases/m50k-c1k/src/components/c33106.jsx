import React from 'react';
const LABEL_33106 = 'component_33106';
export function Component33106({ value = 33106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33106, 'data-value': derived.doubled }, children);
}
export default Component33106;
