import React from 'react';
const LABEL_24369 = 'component_24369';
export function Component24369({ value = 24369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24369, 'data-value': derived.doubled }, children);
}
export default Component24369;
