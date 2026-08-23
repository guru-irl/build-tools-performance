import React from 'react';
const LABEL_35921 = 'component_35921';
export function Component35921({ value = 35921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35921, 'data-value': derived.doubled }, children);
}
export default Component35921;
