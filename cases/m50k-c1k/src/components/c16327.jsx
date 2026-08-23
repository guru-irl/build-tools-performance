import React from 'react';
const LABEL_16327 = 'component_16327';
export function Component16327({ value = 16327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16327, 'data-value': derived.doubled }, children);
}
export default Component16327;
