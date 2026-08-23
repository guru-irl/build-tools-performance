import React from 'react';
const LABEL_33921 = 'component_33921';
export function Component33921({ value = 33921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33921, 'data-value': derived.doubled }, children);
}
export default Component33921;
