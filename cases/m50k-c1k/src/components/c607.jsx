import React from 'react';
const LABEL_607 = 'component_607';
export function Component607({ value = 607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_607, 'data-value': derived.doubled }, children);
}
export default Component607;
