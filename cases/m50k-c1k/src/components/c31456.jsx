import React from 'react';
const LABEL_31456 = 'component_31456';
export function Component31456({ value = 31456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31456, 'data-value': derived.doubled }, children);
}
export default Component31456;
