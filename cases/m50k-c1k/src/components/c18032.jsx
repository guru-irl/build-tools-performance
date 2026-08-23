import React from 'react';
const LABEL_18032 = 'component_18032';
export function Component18032({ value = 18032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18032, 'data-value': derived.doubled }, children);
}
export default Component18032;
