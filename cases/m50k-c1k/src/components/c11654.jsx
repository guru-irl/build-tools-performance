import React from 'react';
const LABEL_11654 = 'component_11654';
export function Component11654({ value = 11654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11654, 'data-value': derived.doubled }, children);
}
export default Component11654;
