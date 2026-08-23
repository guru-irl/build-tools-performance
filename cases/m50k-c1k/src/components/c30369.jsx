import React from 'react';
const LABEL_30369 = 'component_30369';
export function Component30369({ value = 30369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30369, 'data-value': derived.doubled }, children);
}
export default Component30369;
