import React from 'react';
const LABEL_1607 = 'component_1607';
export function Component1607({ value = 1607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1607, 'data-value': derived.doubled }, children);
}
export default Component1607;
