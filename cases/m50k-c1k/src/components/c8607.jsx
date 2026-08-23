import React from 'react';
const LABEL_8607 = 'component_8607';
export function Component8607({ value = 8607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8607, 'data-value': derived.doubled }, children);
}
export default Component8607;
