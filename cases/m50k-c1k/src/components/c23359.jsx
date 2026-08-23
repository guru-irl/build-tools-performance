import React from 'react';
const LABEL_23359 = 'component_23359';
export function Component23359({ value = 23359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23359, 'data-value': derived.doubled }, children);
}
export default Component23359;
