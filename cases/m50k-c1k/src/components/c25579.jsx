import React from 'react';
const LABEL_25579 = 'component_25579';
export function Component25579({ value = 25579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25579, 'data-value': derived.doubled }, children);
}
export default Component25579;
