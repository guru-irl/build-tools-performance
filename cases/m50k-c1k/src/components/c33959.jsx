import React from 'react';
const LABEL_33959 = 'component_33959';
export function Component33959({ value = 33959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33959, 'data-value': derived.doubled }, children);
}
export default Component33959;
