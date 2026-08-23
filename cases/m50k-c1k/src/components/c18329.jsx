import React from 'react';
const LABEL_18329 = 'component_18329';
export function Component18329({ value = 18329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18329, 'data-value': derived.doubled }, children);
}
export default Component18329;
