import React from 'react';
const LABEL_24509 = 'component_24509';
export function Component24509({ value = 24509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24509, 'data-value': derived.doubled }, children);
}
export default Component24509;
