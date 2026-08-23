import React from 'react';
const LABEL_26779 = 'component_26779';
export function Component26779({ value = 26779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26779, 'data-value': derived.doubled }, children);
}
export default Component26779;
