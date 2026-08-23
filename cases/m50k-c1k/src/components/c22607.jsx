import React from 'react';
const LABEL_22607 = 'component_22607';
export function Component22607({ value = 22607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22607, 'data-value': derived.doubled }, children);
}
export default Component22607;
