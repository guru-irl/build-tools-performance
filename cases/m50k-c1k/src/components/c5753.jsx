import React from 'react';
const LABEL_5753 = 'component_5753';
export function Component5753({ value = 5753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5753, 'data-value': derived.doubled }, children);
}
export default Component5753;
