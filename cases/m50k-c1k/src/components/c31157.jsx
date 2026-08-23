import React from 'react';
const LABEL_31157 = 'component_31157';
export function Component31157({ value = 31157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31157, 'data-value': derived.doubled }, children);
}
export default Component31157;
