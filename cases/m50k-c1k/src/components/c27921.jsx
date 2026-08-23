import React from 'react';
const LABEL_27921 = 'component_27921';
export function Component27921({ value = 27921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27921, 'data-value': derived.doubled }, children);
}
export default Component27921;
