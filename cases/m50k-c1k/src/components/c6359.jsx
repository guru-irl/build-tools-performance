import React from 'react';
const LABEL_6359 = 'component_6359';
export function Component6359({ value = 6359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6359, 'data-value': derived.doubled }, children);
}
export default Component6359;
