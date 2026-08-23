import React from 'react';
const LABEL_40607 = 'component_40607';
export function Component40607({ value = 40607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40607, 'data-value': derived.doubled }, children);
}
export default Component40607;
