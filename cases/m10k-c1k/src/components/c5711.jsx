import React from 'react';
const LABEL_5711 = 'component_5711';
export function Component5711({ value = 5711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5711, 'data-value': derived.doubled }, children);
}
export default Component5711;
