import React from 'react';
const LABEL_35267 = 'component_35267';
export function Component35267({ value = 35267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35267, 'data-value': derived.doubled }, children);
}
export default Component35267;
