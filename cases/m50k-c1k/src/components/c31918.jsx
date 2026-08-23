import React from 'react';
const LABEL_31918 = 'component_31918';
export function Component31918({ value = 31918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31918, 'data-value': derived.doubled }, children);
}
export default Component31918;
