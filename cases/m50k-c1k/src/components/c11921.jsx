import React from 'react';
const LABEL_11921 = 'component_11921';
export function Component11921({ value = 11921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11921, 'data-value': derived.doubled }, children);
}
export default Component11921;
