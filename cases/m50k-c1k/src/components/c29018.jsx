import React from 'react';
const LABEL_29018 = 'component_29018';
export function Component29018({ value = 29018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29018, 'data-value': derived.doubled }, children);
}
export default Component29018;
