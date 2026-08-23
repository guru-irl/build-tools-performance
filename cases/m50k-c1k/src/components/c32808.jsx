import React from 'react';
const LABEL_32808 = 'component_32808';
export function Component32808({ value = 32808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32808, 'data-value': derived.doubled }, children);
}
export default Component32808;
