import React from 'react';
const LABEL_29129 = 'component_29129';
export function Component29129({ value = 29129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29129, 'data-value': derived.doubled }, children);
}
export default Component29129;
