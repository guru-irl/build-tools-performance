import React from 'react';
const LABEL_18247 = 'component_18247';
export function Component18247({ value = 18247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18247, 'data-value': derived.doubled }, children);
}
export default Component18247;
