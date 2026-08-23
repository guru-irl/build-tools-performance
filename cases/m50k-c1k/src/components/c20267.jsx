import React from 'react';
const LABEL_20267 = 'component_20267';
export function Component20267({ value = 20267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20267, 'data-value': derived.doubled }, children);
}
export default Component20267;
