import React from 'react';
const LABEL_10611 = 'component_10611';
export function Component10611({ value = 10611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10611, 'data-value': derived.doubled }, children);
}
export default Component10611;
