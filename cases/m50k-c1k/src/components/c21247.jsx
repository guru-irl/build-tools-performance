import React from 'react';
const LABEL_21247 = 'component_21247';
export function Component21247({ value = 21247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21247, 'data-value': derived.doubled }, children);
}
export default Component21247;
