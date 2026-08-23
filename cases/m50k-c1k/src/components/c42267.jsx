import React from 'react';
const LABEL_42267 = 'component_42267';
export function Component42267({ value = 42267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42267, 'data-value': derived.doubled }, children);
}
export default Component42267;
