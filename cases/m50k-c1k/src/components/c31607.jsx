import React from 'react';
const LABEL_31607 = 'component_31607';
export function Component31607({ value = 31607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31607, 'data-value': derived.doubled }, children);
}
export default Component31607;
