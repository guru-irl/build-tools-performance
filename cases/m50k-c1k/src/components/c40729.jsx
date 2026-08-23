import React from 'react';
const LABEL_40729 = 'component_40729';
export function Component40729({ value = 40729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40729, 'data-value': derived.doubled }, children);
}
export default Component40729;
