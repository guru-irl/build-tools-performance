import React from 'react';
const LABEL_22921 = 'component_22921';
export function Component22921({ value = 22921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22921, 'data-value': derived.doubled }, children);
}
export default Component22921;
