import React from 'react';
const LABEL_16932 = 'component_16932';
export function Component16932({ value = 16932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16932, 'data-value': derived.doubled }, children);
}
export default Component16932;
