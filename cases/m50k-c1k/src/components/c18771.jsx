import React from 'react';
const LABEL_18771 = 'component_18771';
export function Component18771({ value = 18771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18771, 'data-value': derived.doubled }, children);
}
export default Component18771;
