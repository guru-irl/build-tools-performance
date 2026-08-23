import React from 'react';
const LABEL_31753 = 'component_31753';
export function Component31753({ value = 31753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31753, 'data-value': derived.doubled }, children);
}
export default Component31753;
