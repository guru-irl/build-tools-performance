import React from 'react';
const LABEL_44921 = 'component_44921';
export function Component44921({ value = 44921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44921, 'data-value': derived.doubled }, children);
}
export default Component44921;
