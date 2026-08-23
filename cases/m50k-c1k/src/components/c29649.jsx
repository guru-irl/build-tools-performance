import React from 'react';
const LABEL_29649 = 'component_29649';
export function Component29649({ value = 29649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29649, 'data-value': derived.doubled }, children);
}
export default Component29649;
