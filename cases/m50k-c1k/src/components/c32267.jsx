import React from 'react';
const LABEL_32267 = 'component_32267';
export function Component32267({ value = 32267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32267, 'data-value': derived.doubled }, children);
}
export default Component32267;
