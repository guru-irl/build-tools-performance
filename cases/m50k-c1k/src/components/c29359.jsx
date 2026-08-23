import React from 'react';
const LABEL_29359 = 'component_29359';
export function Component29359({ value = 29359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29359, 'data-value': derived.doubled }, children);
}
export default Component29359;
