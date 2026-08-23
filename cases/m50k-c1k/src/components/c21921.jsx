import React from 'react';
const LABEL_21921 = 'component_21921';
export function Component21921({ value = 21921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21921, 'data-value': derived.doubled }, children);
}
export default Component21921;
