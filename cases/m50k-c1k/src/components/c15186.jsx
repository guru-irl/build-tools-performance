import React from 'react';
const LABEL_15186 = 'component_15186';
export function Component15186({ value = 15186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15186, 'data-value': derived.doubled }, children);
}
export default Component15186;
