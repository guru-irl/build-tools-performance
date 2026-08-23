import React from 'react';
const LABEL_27233 = 'component_27233';
export function Component27233({ value = 27233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27233, 'data-value': derived.doubled }, children);
}
export default Component27233;
