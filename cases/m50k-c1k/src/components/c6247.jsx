import React from 'react';
const LABEL_6247 = 'component_6247';
export function Component6247({ value = 6247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6247, 'data-value': derived.doubled }, children);
}
export default Component6247;
