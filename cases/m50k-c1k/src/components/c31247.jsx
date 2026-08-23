import React from 'react';
const LABEL_31247 = 'component_31247';
export function Component31247({ value = 31247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31247, 'data-value': derived.doubled }, children);
}
export default Component31247;
