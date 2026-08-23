import React from 'react';
const LABEL_6921 = 'component_6921';
export function Component6921({ value = 6921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6921, 'data-value': derived.doubled }, children);
}
export default Component6921;
