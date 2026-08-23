import React from 'react';
const LABEL_16359 = 'component_16359';
export function Component16359({ value = 16359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16359, 'data-value': derived.doubled }, children);
}
export default Component16359;
