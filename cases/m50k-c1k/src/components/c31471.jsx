import React from 'react';
const LABEL_31471 = 'component_31471';
export function Component31471({ value = 31471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31471, 'data-value': derived.doubled }, children);
}
export default Component31471;
