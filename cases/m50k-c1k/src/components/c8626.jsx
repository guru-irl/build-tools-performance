import React from 'react';
const LABEL_8626 = 'component_8626';
export function Component8626({ value = 8626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8626, 'data-value': derived.doubled }, children);
}
export default Component8626;
