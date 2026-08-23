import React from 'react';
const LABEL_13359 = 'component_13359';
export function Component13359({ value = 13359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13359, 'data-value': derived.doubled }, children);
}
export default Component13359;
