import React from 'react';
const LABEL_31975 = 'component_31975';
export function Component31975({ value = 31975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31975, 'data-value': derived.doubled }, children);
}
export default Component31975;
