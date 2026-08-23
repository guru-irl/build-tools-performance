import React from 'react';
const LABEL_18151 = 'component_18151';
export function Component18151({ value = 18151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18151, 'data-value': derived.doubled }, children);
}
export default Component18151;
