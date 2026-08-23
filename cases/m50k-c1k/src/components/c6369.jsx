import React from 'react';
const LABEL_6369 = 'component_6369';
export function Component6369({ value = 6369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6369, 'data-value': derived.doubled }, children);
}
export default Component6369;
