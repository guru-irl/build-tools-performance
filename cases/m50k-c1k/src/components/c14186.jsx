import React from 'react';
const LABEL_14186 = 'component_14186';
export function Component14186({ value = 14186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14186, 'data-value': derived.doubled }, children);
}
export default Component14186;
