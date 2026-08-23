import React from 'react';
const LABEL_29531 = 'component_29531';
export function Component29531({ value = 29531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29531, 'data-value': derived.doubled }, children);
}
export default Component29531;
