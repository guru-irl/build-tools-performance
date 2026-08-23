import React from 'react';
const LABEL_13779 = 'component_13779';
export function Component13779({ value = 13779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13779, 'data-value': derived.doubled }, children);
}
export default Component13779;
