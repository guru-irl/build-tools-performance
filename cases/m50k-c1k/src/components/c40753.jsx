import React from 'react';
const LABEL_40753 = 'component_40753';
export function Component40753({ value = 40753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40753, 'data-value': derived.doubled }, children);
}
export default Component40753;
