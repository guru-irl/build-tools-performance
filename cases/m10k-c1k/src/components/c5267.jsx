import React from 'react';
const LABEL_5267 = 'component_5267';
export function Component5267({ value = 5267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5267, 'data-value': derived.doubled }, children);
}
export default Component5267;
