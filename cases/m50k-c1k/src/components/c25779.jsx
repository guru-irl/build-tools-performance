import React from 'react';
const LABEL_25779 = 'component_25779';
export function Component25779({ value = 25779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25779, 'data-value': derived.doubled }, children);
}
export default Component25779;
