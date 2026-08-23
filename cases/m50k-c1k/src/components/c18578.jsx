import React from 'react';
const LABEL_18578 = 'component_18578';
export function Component18578({ value = 18578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18578, 'data-value': derived.doubled }, children);
}
export default Component18578;
