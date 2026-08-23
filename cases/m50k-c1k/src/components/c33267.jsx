import React from 'react';
const LABEL_33267 = 'component_33267';
export function Component33267({ value = 33267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33267, 'data-value': derived.doubled }, children);
}
export default Component33267;
