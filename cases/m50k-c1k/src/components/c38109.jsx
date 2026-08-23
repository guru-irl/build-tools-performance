import React from 'react';
const LABEL_38109 = 'component_38109';
export function Component38109({ value = 38109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38109, 'data-value': derived.doubled }, children);
}
export default Component38109;
