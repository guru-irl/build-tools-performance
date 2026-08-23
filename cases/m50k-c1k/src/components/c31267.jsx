import React from 'react';
const LABEL_31267 = 'component_31267';
export function Component31267({ value = 31267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31267, 'data-value': derived.doubled }, children);
}
export default Component31267;
