import React from 'react';
const LABEL_17665 = 'component_17665';
export function Component17665({ value = 17665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17665, 'data-value': derived.doubled }, children);
}
export default Component17665;
