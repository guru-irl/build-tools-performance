import React from 'react';
const LABEL_29117 = 'component_29117';
export function Component29117({ value = 29117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29117, 'data-value': derived.doubled }, children);
}
export default Component29117;
