import React from 'react';
const LABEL_45921 = 'component_45921';
export function Component45921({ value = 45921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45921, 'data-value': derived.doubled }, children);
}
export default Component45921;
