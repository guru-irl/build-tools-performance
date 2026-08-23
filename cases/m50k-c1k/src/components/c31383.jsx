import React from 'react';
const LABEL_31383 = 'component_31383';
export function Component31383({ value = 31383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31383, 'data-value': derived.doubled }, children);
}
export default Component31383;
