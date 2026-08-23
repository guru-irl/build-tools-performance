import React from 'react';
const LABEL_23904 = 'component_23904';
export function Component23904({ value = 23904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23904, 'data-value': derived.doubled }, children);
}
export default Component23904;
