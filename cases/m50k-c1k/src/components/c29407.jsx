import React from 'react';
const LABEL_29407 = 'component_29407';
export function Component29407({ value = 29407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29407, 'data-value': derived.doubled }, children);
}
export default Component29407;
