import React from 'react';
const LABEL_39921 = 'component_39921';
export function Component39921({ value = 39921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39921, 'data-value': derived.doubled }, children);
}
export default Component39921;
