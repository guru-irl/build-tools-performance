import React from 'react';
const LABEL_16705 = 'component_16705';
export function Component16705({ value = 16705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16705, 'data-value': derived.doubled }, children);
}
export default Component16705;
