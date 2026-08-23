import React from 'react';
const LABEL_29156 = 'component_29156';
export function Component29156({ value = 29156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29156, 'data-value': derived.doubled }, children);
}
export default Component29156;
