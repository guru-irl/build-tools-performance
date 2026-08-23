import React from 'react';
const LABEL_18359 = 'component_18359';
export function Component18359({ value = 18359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18359, 'data-value': derived.doubled }, children);
}
export default Component18359;
