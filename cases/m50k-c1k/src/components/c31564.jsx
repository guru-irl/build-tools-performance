import React from 'react';
const LABEL_31564 = 'component_31564';
export function Component31564({ value = 31564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31564, 'data-value': derived.doubled }, children);
}
export default Component31564;
