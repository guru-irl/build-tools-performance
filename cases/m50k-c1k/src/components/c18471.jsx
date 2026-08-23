import React from 'react';
const LABEL_18471 = 'component_18471';
export function Component18471({ value = 18471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18471, 'data-value': derived.doubled }, children);
}
export default Component18471;
