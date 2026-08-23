import React from 'react';
const LABEL_31214 = 'component_31214';
export function Component31214({ value = 31214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31214, 'data-value': derived.doubled }, children);
}
export default Component31214;
