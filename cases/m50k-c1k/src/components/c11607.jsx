import React from 'react';
const LABEL_11607 = 'component_11607';
export function Component11607({ value = 11607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11607, 'data-value': derived.doubled }, children);
}
export default Component11607;
