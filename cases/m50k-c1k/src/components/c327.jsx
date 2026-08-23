import React from 'react';
const LABEL_327 = 'component_327';
export function Component327({ value = 327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_327, 'data-value': derived.doubled }, children);
}
export default Component327;
