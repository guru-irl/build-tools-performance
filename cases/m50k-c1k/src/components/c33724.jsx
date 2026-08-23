import React from 'react';
const LABEL_33724 = 'component_33724';
export function Component33724({ value = 33724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33724, 'data-value': derived.doubled }, children);
}
export default Component33724;
