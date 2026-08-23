import React from 'react';
const LABEL_14369 = 'component_14369';
export function Component14369({ value = 14369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14369, 'data-value': derived.doubled }, children);
}
export default Component14369;
