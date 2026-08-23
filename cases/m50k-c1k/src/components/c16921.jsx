import React from 'react';
const LABEL_16921 = 'component_16921';
export function Component16921({ value = 16921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16921, 'data-value': derived.doubled }, children);
}
export default Component16921;
