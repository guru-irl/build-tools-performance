import React from 'react';
const LABEL_32369 = 'component_32369';
export function Component32369({ value = 32369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32369, 'data-value': derived.doubled }, children);
}
export default Component32369;
