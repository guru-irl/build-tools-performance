import React from 'react';
const LABEL_29247 = 'component_29247';
export function Component29247({ value = 29247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29247, 'data-value': derived.doubled }, children);
}
export default Component29247;
