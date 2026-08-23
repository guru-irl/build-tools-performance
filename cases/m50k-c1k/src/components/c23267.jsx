import React from 'react';
const LABEL_23267 = 'component_23267';
export function Component23267({ value = 23267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23267, 'data-value': derived.doubled }, children);
}
export default Component23267;
