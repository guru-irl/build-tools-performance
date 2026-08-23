import React from 'react';
const LABEL_24267 = 'component_24267';
export function Component24267({ value = 24267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24267, 'data-value': derived.doubled }, children);
}
export default Component24267;
