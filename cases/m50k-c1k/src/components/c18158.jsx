import React from 'react';
const LABEL_18158 = 'component_18158';
export function Component18158({ value = 18158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18158, 'data-value': derived.doubled }, children);
}
export default Component18158;
