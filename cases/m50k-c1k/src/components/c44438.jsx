import React from 'react';
const LABEL_44438 = 'component_44438';
export function Component44438({ value = 44438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44438, 'data-value': derived.doubled }, children);
}
export default Component44438;
