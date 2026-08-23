import React from 'react';
const LABEL_16267 = 'component_16267';
export function Component16267({ value = 16267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16267, 'data-value': derived.doubled }, children);
}
export default Component16267;
