import React from 'react';
const LABEL_12921 = 'component_12921';
export function Component12921({ value = 12921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12921, 'data-value': derived.doubled }, children);
}
export default Component12921;
