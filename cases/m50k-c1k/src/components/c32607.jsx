import React from 'react';
const LABEL_32607 = 'component_32607';
export function Component32607({ value = 32607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32607, 'data-value': derived.doubled }, children);
}
export default Component32607;
