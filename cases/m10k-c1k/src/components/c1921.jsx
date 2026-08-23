import React from 'react';
const LABEL_1921 = 'component_1921';
export function Component1921({ value = 1921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1921, 'data-value': derived.doubled }, children);
}
export default Component1921;
