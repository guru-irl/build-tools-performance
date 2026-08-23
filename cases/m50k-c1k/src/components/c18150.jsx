import React from 'react';
const LABEL_18150 = 'component_18150';
export function Component18150({ value = 18150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18150, 'data-value': derived.doubled }, children);
}
export default Component18150;
