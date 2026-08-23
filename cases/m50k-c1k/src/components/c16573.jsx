import React from 'react';
const LABEL_16573 = 'component_16573';
export function Component16573({ value = 16573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16573, 'data-value': derived.doubled }, children);
}
export default Component16573;
