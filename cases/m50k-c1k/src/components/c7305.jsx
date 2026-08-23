import React from 'react';
const LABEL_7305 = 'component_7305';
export function Component7305({ value = 7305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7305, 'data-value': derived.doubled }, children);
}
export default Component7305;
