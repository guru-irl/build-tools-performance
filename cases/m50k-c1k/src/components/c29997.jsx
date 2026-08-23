import React from 'react';
const LABEL_29997 = 'component_29997';
export function Component29997({ value = 29997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29997, 'data-value': derived.doubled }, children);
}
export default Component29997;
