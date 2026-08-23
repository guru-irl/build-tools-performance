import React from 'react';
const LABEL_6779 = 'component_6779';
export function Component6779({ value = 6779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6779, 'data-value': derived.doubled }, children);
}
export default Component6779;
