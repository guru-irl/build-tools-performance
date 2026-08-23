import React from 'react';
const LABEL_32359 = 'component_32359';
export function Component32359({ value = 32359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32359, 'data-value': derived.doubled }, children);
}
export default Component32359;
