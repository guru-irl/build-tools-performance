import React from 'react';
const LABEL_6267 = 'component_6267';
export function Component6267({ value = 6267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6267, 'data-value': derived.doubled }, children);
}
export default Component6267;
