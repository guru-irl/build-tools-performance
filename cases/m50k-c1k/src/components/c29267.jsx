import React from 'react';
const LABEL_29267 = 'component_29267';
export function Component29267({ value = 29267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29267, 'data-value': derived.doubled }, children);
}
export default Component29267;
