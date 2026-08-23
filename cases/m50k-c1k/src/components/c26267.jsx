import React from 'react';
const LABEL_26267 = 'component_26267';
export function Component26267({ value = 26267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26267, 'data-value': derived.doubled }, children);
}
export default Component26267;
