import React from 'react';
const LABEL_29574 = 'component_29574';
export function Component29574({ value = 29574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29574, 'data-value': derived.doubled }, children);
}
export default Component29574;
