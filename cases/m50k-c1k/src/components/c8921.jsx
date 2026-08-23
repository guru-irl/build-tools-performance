import React from 'react';
const LABEL_8921 = 'component_8921';
export function Component8921({ value = 8921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8921, 'data-value': derived.doubled }, children);
}
export default Component8921;
