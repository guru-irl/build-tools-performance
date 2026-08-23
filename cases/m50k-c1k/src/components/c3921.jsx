import React from 'react';
const LABEL_3921 = 'component_3921';
export function Component3921({ value = 3921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3921, 'data-value': derived.doubled }, children);
}
export default Component3921;
