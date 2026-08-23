import React from 'react';
const LABEL_27924 = 'component_27924';
export function Component27924({ value = 27924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27924, 'data-value': derived.doubled }, children);
}
export default Component27924;
