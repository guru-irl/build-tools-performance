import React from 'react';
const LABEL_15267 = 'component_15267';
export function Component15267({ value = 15267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15267, 'data-value': derived.doubled }, children);
}
export default Component15267;
