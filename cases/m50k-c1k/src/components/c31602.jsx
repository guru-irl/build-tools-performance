import React from 'react';
const LABEL_31602 = 'component_31602';
export function Component31602({ value = 31602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31602, 'data-value': derived.doubled }, children);
}
export default Component31602;
