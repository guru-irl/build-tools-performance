import React from 'react';
const LABEL_18290 = 'component_18290';
export function Component18290({ value = 18290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18290, 'data-value': derived.doubled }, children);
}
export default Component18290;
