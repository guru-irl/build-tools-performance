import React from 'react';
const LABEL_24359 = 'component_24359';
export function Component24359({ value = 24359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24359, 'data-value': derived.doubled }, children);
}
export default Component24359;
