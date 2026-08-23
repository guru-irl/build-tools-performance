import React from 'react';
const LABEL_18369 = 'component_18369';
export function Component18369({ value = 18369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18369, 'data-value': derived.doubled }, children);
}
export default Component18369;
