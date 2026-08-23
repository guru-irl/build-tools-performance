import React from 'react';
const LABEL_13007 = 'component_13007';
export function Component13007({ value = 13007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13007, 'data-value': derived.doubled }, children);
}
export default Component13007;
