import React from 'react';
const LABEL_29118 = 'component_29118';
export function Component29118({ value = 29118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29118, 'data-value': derived.doubled }, children);
}
export default Component29118;
