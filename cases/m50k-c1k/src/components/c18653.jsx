import React from 'react';
const LABEL_18653 = 'component_18653';
export function Component18653({ value = 18653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18653, 'data-value': derived.doubled }, children);
}
export default Component18653;
