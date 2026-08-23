import React from 'react';
const LABEL_27356 = 'component_27356';
export function Component27356({ value = 27356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27356, 'data-value': derived.doubled }, children);
}
export default Component27356;
