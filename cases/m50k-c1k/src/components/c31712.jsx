import React from 'react';
const LABEL_31712 = 'component_31712';
export function Component31712({ value = 31712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31712, 'data-value': derived.doubled }, children);
}
export default Component31712;
