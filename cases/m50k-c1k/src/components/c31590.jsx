import React from 'react';
const LABEL_31590 = 'component_31590';
export function Component31590({ value = 31590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31590, 'data-value': derived.doubled }, children);
}
export default Component31590;
