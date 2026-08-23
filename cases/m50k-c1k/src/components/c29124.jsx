import React from 'react';
const LABEL_29124 = 'component_29124';
export function Component29124({ value = 29124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29124, 'data-value': derived.doubled }, children);
}
export default Component29124;
