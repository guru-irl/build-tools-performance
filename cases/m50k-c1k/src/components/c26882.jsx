import React from 'react';
const LABEL_26882 = 'component_26882';
export function Component26882({ value = 26882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26882, 'data-value': derived.doubled }, children);
}
export default Component26882;
