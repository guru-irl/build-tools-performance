import React from 'react';
const LABEL_16779 = 'component_16779';
export function Component16779({ value = 16779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16779, 'data-value': derived.doubled }, children);
}
export default Component16779;
