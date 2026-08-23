import React from 'react';
const LABEL_26150 = 'component_26150';
export function Component26150({ value = 26150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26150, 'data-value': derived.doubled }, children);
}
export default Component26150;
