import React from 'react';
const LABEL_18676 = 'component_18676';
export function Component18676({ value = 18676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18676, 'data-value': derived.doubled }, children);
}
export default Component18676;
