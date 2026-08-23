import React from 'react';
const LABEL_31921 = 'component_31921';
export function Component31921({ value = 31921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31921, 'data-value': derived.doubled }, children);
}
export default Component31921;
