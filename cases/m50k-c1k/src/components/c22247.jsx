import React from 'react';
const LABEL_22247 = 'component_22247';
export function Component22247({ value = 22247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22247, 'data-value': derived.doubled }, children);
}
export default Component22247;
