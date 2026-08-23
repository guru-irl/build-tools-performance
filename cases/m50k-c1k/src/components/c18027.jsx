import React from 'react';
const LABEL_18027 = 'component_18027';
export function Component18027({ value = 18027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18027, 'data-value': derived.doubled }, children);
}
export default Component18027;
