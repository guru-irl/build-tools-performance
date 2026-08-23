import React from 'react';
const LABEL_14753 = 'component_14753';
export function Component14753({ value = 14753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14753, 'data-value': derived.doubled }, children);
}
export default Component14753;
