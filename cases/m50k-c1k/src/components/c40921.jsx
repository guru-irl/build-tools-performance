import React from 'react';
const LABEL_40921 = 'component_40921';
export function Component40921({ value = 40921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40921, 'data-value': derived.doubled }, children);
}
export default Component40921;
